var i = r(47120);
var a = r(773603);
var s = r(200651),
    o = r(192379),
    l = r(481060),
    u = r(600164),
    c = r(922611),
    d = r(155647),
    f = r(299443),
    _ = r(185625),
    h = r(273389),
    p = r(778231),
    m = r(816342),
    g = r(15667),
    E = r(76264),
    v = r(805746),
    I = r(822686),
    T = r(356110),
    b = r(730719),
    y = r(996701),
    S = r(320596),
    A = r(273514),
    N = r(995712),
    C = r(234937),
    R = r(473121),
    O = r(497954),
    D = r(449413),
    L = r(266080),
    x = r(316617),
    w = r(15682),
    P = r(189472),
    M = r(749534),
    k = r(157759),
    U = r(521332),
    B = r(905434),
    G = r(196627),
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
        [ea, es] = o.useState(!1),
        [eo, el] = o.useState(!1),
        [eu, ec] = o.useState(''),
        [ed, ef] = o.useState(() => ({})),
        [e_, eh] = o.useState(() => ({})),
        [ep, em] = o.useState((0, _.VP)(er, ei, ee, $, X)),
        eg = o.useMemo(() => ('message' === r.name ? r.record.channel_id : void 0), [r]),
        eE = (e, n) => {
            let r = { ...ed };
            e in ed ? delete r[e] : (r[e] = n), ef(r), em((0, _.VP)(er, ei, ee, e_, r));
        },
        ev = function (e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = { ...e_ };
            (i[e] = {
                value: n,
                isValid: r
            }),
                eh(i),
                em((0, _.VP)(er, ei, ee, i, ed));
        },
        eI = o.useMemo(
            () => (e) => {
                V({
                    nodeRef: n.id,
                    destination: e,
                    textInput: null != er || null != ei ? e_ : void 0,
                    multiSelect:
                        null != ee
                            ? {
                                  name: ee.name,
                                  state: ed
                              }
                            : void 0
                });
            },
            [n, V, ee, ed, e_, er, ei]
        );
    o.useEffect(() => {
        null != X && ef(X), null != $ && eh($);
    }, [X, $]);
    let eT = () => {
            ec('');
        },
        eb = (e) => {
            if (e === j.evJ.INVALID_FORM_BODY) ec(H.intl.string(H.t.VjAAuL));
            else ec(H.intl.string(H.t.h6D8V1));
        },
        ey = () =>
            Q({
                nodeRef: n.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ec(''), eI(['', e.successNodeId]);
                })
                .catch((e) => {
                    var n;
                    eb(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                })
                .finally(() => {
                    es(!1);
                }),
        eS = (e) => {
            switch (e.type) {
                case 'done':
                case 'cancel':
                    q();
                    break;
                case 'next':
                    eI(['', e.target]);
                    break;
                case 'submit':
                    es(!0), ey();
            }
        };
    o.useEffect(() => {
        n.is_auto_submit &&
            !eo &&
            (el(!0),
            Q({
                nodeRef: n.id,
                destination: ['', n.id]
            }));
    }, [n.is_auto_submit, eo, Q, n.id]);
    let eA = (0, d.fW)(i),
        eN = (0, f.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != eA ? eA : [],
            channelId: eg
        }),
        eC = (0, c.Do)({ location: 'web_iar_node_view' }) && null != W(n, 'ignore_users') && ('message' === r.name || 'first_dm' === r.name || 'user' === r.name);
    return (0, s.jsxs)('div', {
        className: Y.container,
        children: [
            (0, s.jsxs)(l.ModalHeader, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                className: Y.header,
                children: [(0, s.jsx)(G.Z, { element: W(n, 'success') }), (0, s.jsx)(R.Z, { node: n }), (0, s.jsx)(D.Z, { node: n })]
            }),
            (0, s.jsxs)(l.ModalContent, {
                className: Y.body,
                children: [
                    null != et ? (0, s.jsx)(F.Z, { element: et }) : null,
                    null != W(n, 'breadcrumbs') && (0, s.jsx)(g.Z, { history: a }),
                    null != W(n, 'message_preview') && ('message' === r.name || 'first_dm' === r.name) && (0, s.jsx)(x.Z, { message: r.record }),
                    null != W(n, 'user_preview') && 'user' === r.name ? (0, s.jsx)(Z.Z, { user: r.record }) : null,
                    K(n) &&
                        (0, s.jsxs)(M.Z, {
                            children: [
                                eC &&
                                    (0, s.jsx)(O.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: eg,
                                        reportId: J
                                    }),
                                null != W(n, 'block_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name || ('application' === r.name && null != r.record.bot)) &&
                                    (0, s.jsx)(m.Z, {
                                        user: 'application' === r.name ? r.record.bot : 'user' === r.name ? r.record : r.record.author,
                                        channelId: eg,
                                        reportId: J,
                                        reportType: r
                                    }),
                                !eC &&
                                    null != W(n, 'mute_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name) &&
                                    (0, s.jsx)(P.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: eg,
                                        reportId: J
                                    }),
                                null != W(n, 'delete_message') &&
                                    'message' === r.name &&
                                    (0, s.jsx)(I.Z, {
                                        message: r.record,
                                        reportId: J
                                    }),
                                null != W(n, 'leave_guild') &&
                                    'guild' === r.name &&
                                    (0, s.jsx)(L.Z, {
                                        guildId: r.record.id,
                                        reportId: J
                                    }),
                                null != W(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, s.jsx)(v.Z, {
                                        application: r.record,
                                        reportId: J
                                    }),
                                null != W(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, s.jsx)(k.Z, {
                                        application: r.record,
                                        reportId: J
                                    })
                            ]
                        }),
                    null != W(n, 'settings_upsells') &&
                        'message' === r.name &&
                        null != eA &&
                        eN &&
                        (0, s.jsx)(U.Z, {
                            settingsUpsells: eA,
                            channelId: r.record.channel_id,
                            onModalClose: q,
                            reportId: J,
                            reportType: r,
                            reportSubType: i
                        }),
                    null != W(n, 'channel_preview') && 'stage_channel' === r.name && (0, s.jsx)(B.Z, { stageInstance: r.record }),
                    null != W(n, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === r.name && (0, s.jsx)(C.Z, { event: r.record }),
                    null != W(n, 'guild_directory_entry_preview') && 'guild_directory_entry' === r.name && (0, s.jsx)(A.Z, { entry: r.record }),
                    null != W(n, 'guild_discovery_preview') && 'guild_discovery' === r.name && (0, s.jsx)(N.Z, { entry: r.record }),
                    null != W(n, 'app_preview') && 'application' === r.name && (0, s.jsx)(p.Z, { entry: r.record }),
                    null != ee &&
                        (0, s.jsx)(w.Z, {
                            element: ee,
                            onChange: eE,
                            state: ed
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, s.jsx)(T.Z, {
                            elements: ei,
                            onChange: ev,
                            state: e_
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != er &&
                        er.length > 0 &&
                        (0, s.jsx)(S.Z, {
                            elements: er,
                            onChange: ev,
                            state: e_
                        }),
                    (0, s.jsx)(E.Z, {
                        node: n,
                        onSelectChild: eI
                    }),
                    null != en && en.length > 0 ? (0, s.jsx)(y.Z, { elements: en }) : null,
                    (0, s.jsx)(b.Z, {
                        errorMessage: eu,
                        onClose: eT
                    })
                ]
            }),
            (0, s.jsx)(h.Z, {
                button: n.button,
                submitting: ea,
                disableNext: ep,
                onClick: eS,
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
