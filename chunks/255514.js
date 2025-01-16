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
    F = r(289809),
    Z = r(739319),
    V = r(842401),
    j = r(375790),
    H = r(981631),
    Y = r(388032),
    W = r(170780);
function K(e, n) {
    let { elements: r } = e;
    return r.find((e) => {
        let { type: r } = e;
        return r === n;
    });
}
function z(e) {
    let { elements: n } = e;
    return n.some((e) => {
        let { type: n } = e;
        return j.O.includes(n);
    });
}
function q(e, n) {
    let { elements: r } = e;
    return r.filter((e) => {
        let { type: r } = e;
        return r === n;
    });
}
let Q = (e) => {
    let { node: n, reportType: r, reportSubType: i, history: a, onSelectChild: j, onModalClose: Q, onSubmit: X, multiSelect: J, reportId: $, textInput: ee } = e,
        et = K(n, 'checkbox'),
        en = K(n, 'text_line_resource'),
        er = q(n, 'external_link'),
        ei = q(n, 'free_text'),
        ea = q(n, 'dropdown'),
        es = K(n, 'text'),
        [eo, el] = o.useState(!1),
        [eu, ec] = o.useState(!1),
        [ed, ef] = o.useState(''),
        [e_, eh] = o.useState(() => ({})),
        [ep, em] = o.useState(() => ({})),
        [eg, eE] = o.useState((0, _.VP)(ei, ea, et, ee, J)),
        ev = o.useMemo(() => ('message' === r.name ? r.record.channel_id : void 0), [r]),
        eI = (e, n) => {
            let r = { ...e_ };
            e in e_ ? delete r[e] : (r[e] = n), eh(r), eE((0, _.VP)(ei, ea, et, ep, r));
        },
        eT = function (e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = { ...ep };
            (i[e] = {
                value: n,
                isValid: r
            }),
                em(i),
                eE((0, _.VP)(ei, ea, et, i, e_));
        },
        eb = o.useMemo(
            () => (e) => {
                j({
                    nodeRef: n.id,
                    destination: e,
                    textInput: null != ei || null != ea ? ep : void 0,
                    multiSelect:
                        null != et
                            ? {
                                  name: et.name,
                                  state: e_
                              }
                            : void 0
                });
            },
            [n, j, et, e_, ep, ei, ea]
        );
    o.useEffect(() => {
        null != J && eh(J), null != ee && em(ee);
    }, [J, ee]);
    let ey = () => {
            ef('');
        },
        eS = (e) => {
            if (e === H.evJ.INVALID_FORM_BODY) ef(Y.intl.string(Y.t.VjAAuL));
            else ef(Y.intl.string(Y.t.h6D8V1));
        },
        eA = () =>
            X({
                nodeRef: n.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ef(''), eb(['', e.successNodeId]);
                })
                .catch((e) => {
                    var n;
                    eS(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                })
                .finally(() => {
                    el(!1);
                }),
        eN = (e) => {
            switch (e.type) {
                case 'done':
                case 'cancel':
                    Q();
                    break;
                case 'next':
                    eb(['', e.target]);
                    break;
                case 'submit':
                    el(!0), eA();
            }
        };
    o.useEffect(() => {
        n.is_auto_submit &&
            !eu &&
            (ec(!0),
            X({
                nodeRef: n.id,
                destination: ['', n.id]
            }));
    }, [n.is_auto_submit, eu, X, n.id]);
    let eC = (0, d.fW)(i),
        eR = (0, f.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != eC ? eC : [],
            channelId: ev
        }),
        eO = (0, c.Do)({ location: 'web_iar_node_view' }) && null != K(n, 'ignore_users') && ('message' === r.name || 'first_dm' === r.name || 'user' === r.name);
    return (0, s.jsxs)('div', {
        className: W.container,
        children: [
            (0, s.jsxs)(l.ModalHeader, {
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                className: W.header,
                children: [(0, s.jsx)(G.Z, { element: K(n, 'success') }), (0, s.jsx)(R.Z, { node: n }), (0, s.jsx)(D.Z, { node: n })]
            }),
            (0, s.jsxs)(l.ModalContent, {
                className: W.body,
                children: [
                    null != en && (0, s.jsx)(Z.Z, { element: en }),
                    null != es && (0, s.jsx)(F.Z, { element: es }),
                    null != K(n, 'breadcrumbs') && (0, s.jsx)(g.Z, { history: a }),
                    null != K(n, 'message_preview') && ('message' === r.name || 'first_dm' === r.name) && (0, s.jsx)(x.Z, { message: r.record }),
                    null != K(n, 'user_preview') && 'user' === r.name ? (0, s.jsx)(V.Z, { user: r.record }) : null,
                    z(n) &&
                        (0, s.jsxs)(M.Z, {
                            children: [
                                eO &&
                                    (0, s.jsx)(O.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: ev,
                                        reportId: $
                                    }),
                                null != K(n, 'block_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name || ('application' === r.name && null != r.record.bot)) &&
                                    (0, s.jsx)(m.Z, {
                                        user: 'application' === r.name ? r.record.bot : 'user' === r.name ? r.record : r.record.author,
                                        channelId: ev,
                                        reportId: $,
                                        reportType: r
                                    }),
                                !eO &&
                                    null != K(n, 'mute_users') &&
                                    ('message' === r.name || 'first_dm' === r.name || 'user' === r.name) &&
                                    (0, s.jsx)(P.Z, {
                                        user: 'user' === r.name ? r.record : r.record.author,
                                        channelId: ev,
                                        reportId: $
                                    }),
                                null != K(n, 'delete_message') &&
                                    'message' === r.name &&
                                    (0, s.jsx)(I.Z, {
                                        message: r.record,
                                        reportId: $
                                    }),
                                null != K(n, 'leave_guild') &&
                                    'guild' === r.name &&
                                    (0, s.jsx)(L.Z, {
                                        guildId: r.record.id,
                                        reportId: $
                                    }),
                                null != K(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, s.jsx)(v.Z, {
                                        application: r.record,
                                        reportId: $
                                    }),
                                null != K(n, 'deauthorize_app') &&
                                    'application' === r.name &&
                                    (0, s.jsx)(k.Z, {
                                        application: r.record,
                                        reportId: $
                                    })
                            ]
                        }),
                    null != K(n, 'settings_upsells') &&
                        'message' === r.name &&
                        null != eC &&
                        eR &&
                        (0, s.jsx)(U.Z, {
                            settingsUpsells: eC,
                            channelId: r.record.channel_id,
                            onModalClose: Q,
                            reportId: $,
                            reportType: r,
                            reportSubType: i
                        }),
                    null != K(n, 'channel_preview') && 'stage_channel' === r.name && (0, s.jsx)(B.Z, { stageInstance: r.record }),
                    null != K(n, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === r.name && (0, s.jsx)(C.Z, { event: r.record }),
                    null != K(n, 'guild_directory_entry_preview') && 'guild_directory_entry' === r.name && (0, s.jsx)(A.Z, { entry: r.record }),
                    null != K(n, 'guild_discovery_preview') && 'guild_discovery' === r.name && (0, s.jsx)(N.Z, { entry: r.record }),
                    null != K(n, 'app_preview') && 'application' === r.name && (0, s.jsx)(p.Z, { entry: r.record }),
                    null != et &&
                        (0, s.jsx)(w.Z, {
                            element: et,
                            onChange: eI,
                            state: e_
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != ea &&
                        ea.length > 0 &&
                        (0, s.jsx)(T.Z, {
                            elements: ea,
                            onChange: eT,
                            state: ep
                        }),
                    ('user_urf' === r.name || 'message_urf' === r.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, s.jsx)(S.Z, {
                            elements: ei,
                            onChange: eT,
                            state: ep
                        }),
                    (0, s.jsx)(E.Z, {
                        node: n,
                        onSelectChild: eb
                    }),
                    null != er && er.length > 0 ? (0, s.jsx)(y.Z, { elements: er }) : null,
                    (0, s.jsx)(b.Z, {
                        errorMessage: ed,
                        onClose: ey
                    })
                ]
            }),
            (0, s.jsx)(h.Z, {
                button: n.button,
                submitting: eo,
                disableNext: eg,
                onClick: eN,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: a.length > 0
            }),
            (0, s.jsx)(l.ModalCloseButton, {
                className: W.closeButton,
                onClick: Q
            })
        ]
    });
};
n.Z = Q;
