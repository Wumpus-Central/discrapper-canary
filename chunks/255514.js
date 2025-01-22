var i = r(47120);
var a = r(773603);
var o = r(200651),
    s = r(192379),
    l = r(481060),
    u = r(600164),
    c = r(922611),
    d = r(155647),
    f = r(185625),
    p = r(273389),
    h = r(778231),
    _ = r(816342),
    m = r(15667),
    g = r(76264),
    E = r(805746),
    v = r(822686),
    y = r(356110),
    b = r(730719),
    I = r(996701),
    T = r(320596),
    S = r(273514),
    A = r(995712),
    C = r(234937),
    N = r(473121),
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
    Z = r(739319),
    F = r(842401),
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
        [eo, es] = s.useState(!1),
        [el, eu] = s.useState(!1),
        [ec, ed] = s.useState(''),
        [ef, ep] = s.useState(() => ({})),
        [eh, e_] = s.useState(() => ({})),
        [em, eg] = s.useState((0, f.VP)(er, ei, ee, $, X)),
        eE = s.useMemo(() => ('message' === r.name ? r.record.channel_id : void 0), [r]),
        ev = (e, n) => {
            let r = { ...ef };
            e in ef ? delete r[e] : (r[e] = n), ep(r), eg((0, f.VP)(er, ei, ee, eh, r));
        },
        ey = function (e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = { ...eh };
            (i[e] = {
                value: n,
                isValid: r
            }),
                e_(i),
                eg((0, f.VP)(er, ei, ee, i, ef));
        },
        eb = s.useMemo(
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
    s.useEffect(() => {
        null != X && ep(X), null != $ && e_($);
    }, [X, $]);
    let eI = () => {
            ed('');
        },
        eT = (e) => {
            if (e === j.evJ.INVALID_FORM_BODY) ed(H.intl.string(H.t.VjAAuL));
            else ed(H.intl.string(H.t.h6D8V1));
        },
        eS = () =>
            Q({
                nodeRef: n.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ed(''), eb(['', e.successNodeId]);
                })
                .catch((e) => {
                    var n;
                    eT(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                })
                .finally(() => {
                    es(!1);
                }),
        eA = (e) => {
            switch (e.type) {
                case 'done':
                case 'cancel':
                    q();
                    break;
                case 'next':
                    eb(['', e.target]);
                    break;
                case 'submit':
                    es(!0), eS();
            }
        };
    s.useEffect(() => {
        n.is_auto_submit &&
            !el &&
            (eu(!0),
            Q({
                nodeRef: n.id,
                destination: ['', n.id]
            }));
    }, [n.is_auto_submit, el, Q, n.id]);
    let eC = (0, d.fW)(i),
        eN = (0, c.Do)({ location: 'web_iar_node_view' }) && null != W(n, 'ignore_users') && ('message' === r.name || 'first_dm' === r.name || 'user' === r.name);
    return (0, o.jsxs)('div', {
        className: Y.container,
        children: [
            (0, o.jsxs)(l.ModalHeader, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                className: Y.header,
                children: [(0, o.jsx)(B.Z, { element: W(n, 'success') }), (0, o.jsx)(N.Z, { node: n }), (0, o.jsx)(O.Z, { node: n })]
            }),
            (0, o.jsxs)(l.ModalContent, {
                className: Y.body,
                children: [
                    null != et && (0, o.jsx)(Z.Z, { element: et }),
                    null != ea && (0, o.jsx)(G.Z, { element: ea }),
                    null != W(n, 'breadcrumbs') && (0, o.jsx)(m.Z, { history: a }),
                    null != W(n, 'message_preview') && ('message' === r.name || 'first_dm' === r.name) && (0, o.jsx)(L.Z, { message: r.record }),
                    null != W(n, 'user_preview') && 'user' === r.name ? (0, o.jsx)(F.Z, { user: r.record }) : null,
                    K(n) &&
                        (0, o.jsxs)(P.Z, {
                            children: [
                                eN &&
                                    (0, o.jsx)(R.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: eE,
                                        reportId: J
                                    }),
                                null != W(n, 'block_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name || ('application' === r.name && null != r.record.bot)) &&
                                    (0, o.jsx)(_.Z, {
                                        user: 'application' === r.name ? r.record.bot : 'user' === r.name ? r.record : r.record.author,
                                        channelId: eE,
                                        reportId: J,
                                        reportType: r
                                    }),
                                !eN &&
                                    null != W(n, 'mute_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name) &&
                                    (0, o.jsx)(w.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: eE,
                                        reportId: J
                                    }),
                                null != W(n, 'delete_message') &&
                                    'message' === r.name &&
                                    (0, o.jsx)(v.Z, {
                                        message: r.record,
                                        reportId: J
                                    }),
                                null != W(n, 'leave_guild') &&
                                    'guild' === r.name &&
                                    (0, o.jsx)(D.Z, {
                                        guildId: r.record.id,
                                        reportId: J
                                    }),
                                null != W(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, o.jsx)(E.Z, {
                                        application: r.record,
                                        reportId: J
                                    }),
                                null != W(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, o.jsx)(M.Z, {
                                        application: r.record,
                                        reportId: J
                                    })
                            ]
                        }),
                    null != W(n, 'settings_upsells') &&
                        'message' === r.name &&
                        null != eC &&
                        (0, o.jsx)(k.Z, {
                            settingsUpsells: eC,
                            channelId: r.record.channel_id,
                            onModalClose: q,
                            reportId: J,
                            reportType: r,
                            reportSubType: i
                        }),
                    null != W(n, 'channel_preview') && 'stage_channel' === r.name && (0, o.jsx)(U.Z, { stageInstance: r.record }),
                    null != W(n, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === r.name && (0, o.jsx)(C.Z, { event: r.record }),
                    null != W(n, 'guild_directory_entry_preview') && 'guild_directory_entry' === r.name && (0, o.jsx)(S.Z, { entry: r.record }),
                    null != W(n, 'guild_discovery_preview') && 'guild_discovery' === r.name && (0, o.jsx)(A.Z, { entry: r.record }),
                    null != W(n, 'app_preview') && 'application' === r.name && (0, o.jsx)(h.Z, { entry: r.record }),
                    null != ee &&
                        (0, o.jsx)(x.Z, {
                            element: ee,
                            onChange: ev,
                            state: ef
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, o.jsx)(y.Z, {
                            elements: ei,
                            onChange: ey,
                            state: eh
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != er &&
                        er.length > 0 &&
                        (0, o.jsx)(T.Z, {
                            elements: er,
                            onChange: ey,
                            state: eh
                        }),
                    (0, o.jsx)(g.Z, {
                        node: n,
                        onSelectChild: eb
                    }),
                    null != en && en.length > 0 ? (0, o.jsx)(I.Z, { elements: en }) : null,
                    (0, o.jsx)(b.Z, {
                        errorMessage: ec,
                        onClose: eI
                    })
                ]
            }),
            (0, o.jsx)(p.Z, {
                button: n.button,
                submitting: eo,
                disableNext: em,
                onClick: eA,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: a.length > 0
            }),
            (0, o.jsx)(l.ModalCloseButton, {
                className: Y.closeButton,
                onClick: q
            })
        ]
    });
};
n.Z = q;
