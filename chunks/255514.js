n.d(t, { Z: () => W }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(600164),
    o = n(922611),
    l = n(155647),
    u = n(185625),
    c = n(273389),
    d = n(778231),
    f = n(816342),
    _ = n(15667),
    p = n(76264),
    h = n(805746),
    m = n(822686),
    g = n(356110),
    E = n(730719),
    v = n(996701),
    y = n(320596),
    I = n(273514),
    b = n(995712),
    T = n(234937),
    S = n(473121),
    A = n(497954),
    N = n(449413),
    C = n(266080),
    R = n(316617),
    O = n(15682),
    D = n(189472),
    x = n(749534),
    L = n(157759),
    P = n(521332),
    w = n(905434),
    M = n(196627),
    k = n(289809),
    U = n(739319),
    G = n(842401),
    B = n(375790),
    Z = n(981631),
    F = n(388032),
    V = n(170780);
function j(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function H(e) {
    let { elements: t } = e;
    return t.some((e) => {
        let { type: t } = e;
        return B.O.includes(t);
    });
}
function Y(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let W = (e) => {
    let { node: t, reportType: n, reportSubType: B, history: W, onSelectChild: K, onModalClose: z, onSubmit: q, multiSelect: Q, reportId: X, textInput: J } = e,
        $ = j(t, 'checkbox'),
        ee = j(t, 'text_line_resource'),
        et = Y(t, 'external_link'),
        en = Y(t, 'free_text'),
        ei = Y(t, 'dropdown'),
        er = j(t, 'text'),
        [ea, es] = r.useState(!1),
        [eo, el] = r.useState(!1),
        [eu, ec] = r.useState(''),
        [ed, ef] = r.useState(() => ({})),
        [e_, ep] = r.useState(() => ({})),
        [eh, em] = r.useState((0, u.VP)(en, ei, $, J, Q)),
        eg = r.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        eE = (e, t) => {
            let n = { ...ed };
            e in ed ? delete n[e] : (n[e] = t), ef(n), em((0, u.VP)(en, ei, $, e_, n));
        },
        ev = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = { ...e_ };
            (i[e] = {
                value: t,
                isValid: n
            }),
                ep(i),
                em((0, u.VP)(en, ei, $, i, ed));
        },
        ey = r.useMemo(
            () => (e) => {
                K({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != en || null != ei ? e_ : void 0,
                    multiSelect:
                        null != $
                            ? {
                                  name: $.name,
                                  state: ed
                              }
                            : void 0
                });
            },
            [t, K, $, ed, e_, en, ei]
        );
    r.useEffect(() => {
        null != Q && ef(Q), null != J && ep(J);
    }, [Q, J]);
    let eI = () => {
            ec('');
        },
        eb = (e) => {
            e === Z.evJ.INVALID_FORM_BODY ? ec(F.intl.string(F.t.VjAAuL)) : ec(F.intl.string(F.t.h6D8V1));
        },
        eT = () =>
            q({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ec(''), ey(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    eb(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    es(!1);
                }),
        eS = (e) => {
            switch (e.type) {
                case 'done':
                case 'cancel':
                    z();
                    break;
                case 'next':
                    ey(['', e.target]);
                    break;
                case 'submit':
                    es(!0), eT();
            }
        };
    r.useEffect(() => {
        t.is_auto_submit &&
            !eo &&
            (el(!0),
            q({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, eo, q, t.id]);
    let eA = (0, l.fW)(B),
        eN = (0, o.Do)({ location: 'web_iar_node_view' }) && null != j(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, i.jsxs)('div', {
        className: V.container,
        children: [
            (0, i.jsxs)(a.xBx, {
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: V.header,
                children: [(0, i.jsx)(M.Z, { element: j(t, 'success') }), (0, i.jsx)(S.Z, { node: t }), (0, i.jsx)(N.Z, { node: t })]
            }),
            (0, i.jsxs)(a.hzk, {
                className: V.body,
                children: [
                    null != ee && (0, i.jsx)(U.Z, { element: ee }),
                    null != er && (0, i.jsx)(k.Z, { element: er }),
                    null != j(t, 'breadcrumbs') && (0, i.jsx)(_.Z, { history: W }),
                    null != j(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, i.jsx)(R.Z, { message: n.record }),
                    null != j(t, 'user_preview') && 'user' === n.name ? (0, i.jsx)(G.Z, { user: n.record }) : null,
                    H(t) &&
                        (0, i.jsxs)(x.Z, {
                            children: [
                                eN &&
                                    (0, i.jsx)(A.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: X
                                    }),
                                null != j(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, i.jsx)(f.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: X,
                                        reportType: n
                                    }),
                                !eN &&
                                    null != j(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, i.jsx)(D.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: X
                                    }),
                                null != j(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, i.jsx)(m.Z, {
                                        message: n.record,
                                        reportId: X
                                    }),
                                null != j(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, i.jsx)(C.Z, {
                                        guildId: n.record.id,
                                        reportId: X
                                    }),
                                null != j(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, i.jsx)(h.Z, {
                                        application: n.record,
                                        reportId: X
                                    }),
                                null != j(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, i.jsx)(L.Z, {
                                        application: n.record,
                                        reportId: X
                                    })
                            ]
                        }),
                    null != j(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eA &&
                        (0, i.jsx)(P.Z, {
                            settingsUpsells: eA,
                            channelId: n.record.channel_id,
                            onModalClose: z,
                            reportId: X,
                            reportType: n,
                            reportSubType: B
                        }),
                    null != j(t, 'channel_preview') && 'stage_channel' === n.name && (0, i.jsx)(w.Z, { stageInstance: n.record }),
                    null != j(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, i.jsx)(T.Z, { event: n.record }),
                    null != j(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, i.jsx)(I.Z, { entry: n.record }),
                    null != j(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, i.jsx)(b.Z, { entry: n.record }),
                    null != j(t, 'app_preview') && 'application' === n.name && (0, i.jsx)(d.Z, { entry: n.record }),
                    null != $ &&
                        (0, i.jsx)(O.Z, {
                            element: $,
                            onChange: eE,
                            state: ed
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, i.jsx)(g.Z, {
                            elements: ei,
                            onChange: ev,
                            state: e_
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != en &&
                        en.length > 0 &&
                        (0, i.jsx)(y.Z, {
                            elements: en,
                            onChange: ev,
                            state: e_
                        }),
                    (0, i.jsxs)('div', {
                        className: V.listContainer,
                        children: [
                            (0, i.jsx)(p.Z, {
                                node: t,
                                onSelectChild: ey
                            }),
                            null != et && et.length > 0 ? (0, i.jsx)(v.Z, { elements: et }) : null
                        ]
                    }),
                    (0, i.jsx)(E.Z, {
                        errorMessage: eu,
                        onClose: eI
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                button: t.button,
                submitting: ea,
                disableNext: eh,
                onClick: eS,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: W.length > 0
            }),
            (0, i.jsx)(a.olH, {
                className: V.closeButton,
                onClick: z
            })
        ]
    });
};
