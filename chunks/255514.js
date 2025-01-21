var i = r(47120);
var a = r(773603);
var s = r(200651),
    o = r(192379),
    l = r(481060),
    u = r(600164),
    c = r(922611),
    d = r(155647),
    f = r(185625),
    _ = r(273389),
    h = r(778231),
    p = r(816342),
    m = r(15667),
    g = r(76264),
    E = r(805746),
    v = r(822686),
    I = r(356110),
    T = r(730719),
    b = r(996701),
    y = r(320596),
    S = r(273514),
    A = r(995712),
    N = r(234937),
    C = r(473121),
    R = r(497954),
    O = r(449413),
    D = r(266080),
    L = r(316617),
    x = r(15682),
    w = r(189472),
    P = r(749534),
    M = r(157759),
    k = r(521332),
    U = r(905434),
    B = r(196627),
    G = r(289809),
    F = r(739319),
    Z = r(842401),
    V = r(375790),
    j = r(981631),
    H = r(388032),
    Y = r(170780);
function W(e, n) {
    let { elements: r } = e;
    return r.find((e) => {
        let { type: r } = e;
        return r === n;
    });
}
function K(e) {
    let { elements: n } = e;
    return n.some((e) => {
        let { type: n } = e;
        return V.O.includes(n);
    });
}
function z(e, n) {
    let { elements: r } = e;
    return r.filter((e) => {
        let { type: r } = e;
        return r === n;
    });
}
let q = (e) => {
    let { node: n, reportType: r, reportSubType: i, history: a, onSelectChild: V, onModalClose: q, onSubmit: Q, multiSelect: X, reportId: J, textInput: $ } = e,
        ee = W(n, 'checkbox'),
        et = W(n, 'text_line_resource'),
        en = z(n, 'external_link'),
        er = z(n, 'free_text'),
        ei = z(n, 'dropdown'),
        ea = W(n, 'text'),
        [es, eo] = o.useState(!1),
        [el, eu] = o.useState(!1),
        [ec, ed] = o.useState(''),
        [ef, e_] = o.useState(() => ({})),
        [eh, ep] = o.useState(() => ({})),
        [em, eg] = o.useState((0, f.VP)(er, ei, ee, $, X)),
        eE = o.useMemo(() => ('message' === r.name ? r.record.channel_id : void 0), [r]),
        ev = (e, n) => {
            let r = { ...ef };
            e in ef ? delete r[e] : (r[e] = n), e_(r), eg((0, f.VP)(er, ei, ee, eh, r));
        },
        eI = function (e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = { ...eh };
            (i[e] = {
                value: n,
                isValid: r
            }),
                ep(i),
                eg((0, f.VP)(er, ei, ee, i, ef));
        },
        eT = o.useMemo(
            () => (e) => {
                V({
                    nodeRef: n.id,
                    destination: e,
                    textInput: null != er || null != ei ? eh : void 0,
                    multiSelect:
                        null != ee
                            ? {
                                  name: ee.name,
                                  state: ef
                              }
                            : void 0
                });
            },
            [n, V, ee, ef, eh, er, ei]
        );
    o.useEffect(() => {
        null != X && e_(X), null != $ && ep($);
    }, [X, $]);
    let eb = () => {
            ed('');
        },
        ey = (e) => {
            if (e === j.evJ.INVALID_FORM_BODY) ed(H.intl.string(H.t.VjAAuL));
            else ed(H.intl.string(H.t.h6D8V1));
        },
        eS = () =>
            Q({
                nodeRef: n.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ed(''), eT(['', e.successNodeId]);
                })
                .catch((e) => {
                    var n;
                    ey(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                })
                .finally(() => {
                    eo(!1);
                }),
        eA = (e) => {
            switch (e.type) {
                case 'done':
                case 'cancel':
                    q();
                    break;
                case 'next':
                    eT(['', e.target]);
                    break;
                case 'submit':
                    eo(!0), eS();
            }
        };
    o.useEffect(() => {
        n.is_auto_submit &&
            !el &&
            (eu(!0),
            Q({
                nodeRef: n.id,
                destination: ['', n.id]
            }));
    }, [n.is_auto_submit, el, Q, n.id]);
    let eN = (0, d.fW)(i),
        eC = (0, c.Do)({ location: 'web_iar_node_view' }) && null != W(n, 'ignore_users') && ('message' === r.name || 'first_dm' === r.name || 'user' === r.name);
    return (0, s.jsxs)('div', {
        className: Y.container,
        children: [
            (0, s.jsxs)(l.ModalHeader, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                className: Y.header,
                children: [(0, s.jsx)(B.Z, { element: W(n, 'success') }), (0, s.jsx)(C.Z, { node: n }), (0, s.jsx)(O.Z, { node: n })]
            }),
            (0, s.jsxs)(l.ModalContent, {
                className: Y.body,
                children: [
                    null != et && (0, s.jsx)(F.Z, { element: et }),
                    null != ea && (0, s.jsx)(G.Z, { element: ea }),
                    null != W(n, 'breadcrumbs') && (0, s.jsx)(m.Z, { history: a }),
                    null != W(n, 'message_preview') && ('message' === r.name || 'first_dm' === r.name) && (0, s.jsx)(L.Z, { message: r.record }),
                    null != W(n, 'user_preview') && 'user' === r.name ? (0, s.jsx)(Z.Z, { user: r.record }) : null,
                    K(n) &&
                        (0, s.jsxs)(P.Z, {
                            children: [
                                eC &&
                                    (0, s.jsx)(R.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: eE,
                                        reportId: J
                                    }),
                                null != W(n, 'block_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name || ('application' === r.name && null != r.record.bot)) &&
                                    (0, s.jsx)(p.Z, {
                                        user: 'application' === r.name ? r.record.bot : 'user' === r.name ? r.record : r.record.author,
                                        channelId: eE,
                                        reportId: J,
                                        reportType: r
                                    }),
                                !eC &&
                                    null != W(n, 'mute_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name) &&
                                    (0, s.jsx)(w.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: eE,
                                        reportId: J
                                    }),
                                null != W(n, 'delete_message') &&
                                    'message' === r.name &&
                                    (0, s.jsx)(v.Z, {
                                        message: r.record,
                                        reportId: J
                                    }),
                                null != W(n, 'leave_guild') &&
                                    'guild' === r.name &&
                                    (0, s.jsx)(D.Z, {
                                        guildId: r.record.id,
                                        reportId: J
                                    }),
                                null != W(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, s.jsx)(E.Z, {
                                        application: r.record,
                                        reportId: J
                                    }),
                                null != W(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, s.jsx)(M.Z, {
                                        application: r.record,
                                        reportId: J
                                    })
                            ]
                        }),
                    null != W(n, 'settings_upsells') &&
                        'message' === r.name &&
                        null != eN &&
                        (0, s.jsx)(k.Z, {
                            settingsUpsells: eN,
                            channelId: r.record.channel_id,
                            onModalClose: q,
                            reportId: J,
                            reportType: r,
                            reportSubType: i
                        }),
                    null != W(n, 'channel_preview') && 'stage_channel' === r.name && (0, s.jsx)(U.Z, { stageInstance: r.record }),
                    null != W(n, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === r.name && (0, s.jsx)(N.Z, { event: r.record }),
                    null != W(n, 'guild_directory_entry_preview') && 'guild_directory_entry' === r.name && (0, s.jsx)(S.Z, { entry: r.record }),
                    null != W(n, 'guild_discovery_preview') && 'guild_discovery' === r.name && (0, s.jsx)(A.Z, { entry: r.record }),
                    null != W(n, 'app_preview') && 'application' === r.name && (0, s.jsx)(h.Z, { entry: r.record }),
                    null != ee &&
                        (0, s.jsx)(x.Z, {
                            element: ee,
                            onChange: ev,
                            state: ef
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, s.jsx)(I.Z, {
                            elements: ei,
                            onChange: eI,
                            state: eh
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != er &&
                        er.length > 0 &&
                        (0, s.jsx)(y.Z, {
                            elements: er,
                            onChange: eI,
                            state: eh
                        }),
                    (0, s.jsx)(g.Z, {
                        node: n,
                        onSelectChild: eT
                    }),
                    null != en && en.length > 0 ? (0, s.jsx)(b.Z, { elements: en }) : null,
                    (0, s.jsx)(T.Z, {
                        errorMessage: ec,
                        onClose: eb
                    })
                ]
            }),
            (0, s.jsx)(_.Z, {
                button: n.button,
                submitting: es,
                disableNext: em,
                onClick: eA,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: a.length > 0
            }),
            (0, s.jsx)(l.ModalCloseButton, {
                className: Y.closeButton,
                onClick: q
            })
        ]
    });
};
n.Z = q;
