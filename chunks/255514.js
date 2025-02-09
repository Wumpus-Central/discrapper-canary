n.d(t, { Z: () => H }), n(47120), n(773603);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(600164),
    s = n(922611),
    o = n(155647),
    d = n(185625),
    c = n(273389),
    u = n(778231),
    m = n(816342),
    x = n(15667),
    _ = n(76264),
    h = n(805746),
    v = n(822686),
    g = n(356110),
    p = n(730719),
    f = n(996701),
    b = n(320596),
    Z = n(273514),
    j = n(995712),
    I = n(234937),
    T = n(473121),
    C = n(497954),
    N = n(449413),
    E = n(266080),
    S = n(316617),
    k = n(15682),
    A = n(189472),
    L = n(749534),
    R = n(157759),
    y = n(521332),
    P = n(905434),
    M = n(196627),
    D = n(289809),
    B = n(739319),
    O = n(842401),
    z = n(375790),
    U = n(981631),
    G = n(388032),
    w = n(879918);
function F(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function W(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let H = (e) => {
    let { node: t, reportType: n, reportSubType: H, history: X, onSelectChild: q, onModalClose: V, onSubmit: K, multiSelect: Y, reportId: Q, textInput: J } = e,
        $ = F(t, 'checkbox'),
        ee = F(t, 'text_line_resource'),
        et = W(t, 'external_link'),
        en = W(t, 'free_text'),
        el = W(t, 'dropdown'),
        ei = F(t, 'text'),
        [er, ea] = i.useState(!1),
        [es, eo] = i.useState(!1),
        [ed, ec] = i.useState(''),
        [eu, em] = i.useState(() => ({})),
        [ex, e_] = i.useState(() => ({})),
        [eh, ev] = i.useState((0, d.VP)(en, el, $, J, Y)),
        eg = i.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        ep = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = { ...ex };
            (l[e] = {
                value: t,
                isValid: n
            }),
                e_(l),
                ev((0, d.VP)(en, el, $, l, eu));
        },
        ef = i.useMemo(
            () => (e) => {
                q({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != en || null != el ? ex : void 0,
                    multiSelect:
                        null != $
                            ? {
                                  name: $.name,
                                  state: eu
                              }
                            : void 0
                });
            },
            [t, q, $, eu, ex, en, el]
        );
    i.useEffect(() => {
        null != Y && em(Y), null != J && e_(J);
    }, [Y, J]);
    let eb = (e) => {
            e === U.evJ.INVALID_FORM_BODY ? ec(G.intl.string(G.t.VjAAuL)) : ec(G.intl.string(G.t.h6D8V1));
        },
        eZ = () =>
            K({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ec(''), ef(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    eb(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    ea(!1);
                });
    i.useEffect(() => {
        t.is_auto_submit &&
            !es &&
            (eo(!0),
            K({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, es, K, t.id]);
    let ej = (0, o.fW)(H),
        eI = (0, s.Do)({ location: 'web_iar_node_view' }) && null != F(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, l.jsxs)('div', {
        className: w.container,
        children: [
            (0, l.jsxs)(r.xBx, {
                separator: !1,
                direction: a.Z.Direction.VERTICAL,
                className: w.header,
                children: [(0, l.jsx)(M.Z, { element: F(t, 'success') }), (0, l.jsx)(T.Z, { node: t }), (0, l.jsx)(N.Z, { node: t })]
            }),
            (0, l.jsxs)(r.hzk, {
                className: w.body,
                children: [
                    null != ee && (0, l.jsx)(B.Z, { element: ee }),
                    null != ei && (0, l.jsx)(D.Z, { element: ei }),
                    null != F(t, 'breadcrumbs') && (0, l.jsx)(x.Z, { history: X }),
                    null != F(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, l.jsx)(S.Z, { message: n.record }),
                    null != F(t, 'user_preview') && 'user' === n.name ? (0, l.jsx)(O.Z, { user: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return z.O.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(L.Z, {
                            children: [
                                eI &&
                                    (0, l.jsx)(C.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: Q
                                    }),
                                null != F(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(m.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: Q,
                                        reportType: n
                                    }),
                                !eI &&
                                    null != F(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, l.jsx)(A.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: Q
                                    }),
                                null != F(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, l.jsx)(v.Z, {
                                        message: n.record,
                                        reportId: Q
                                    }),
                                null != F(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, l.jsx)(E.Z, {
                                        guildId: n.record.id,
                                        reportId: Q
                                    }),
                                null != F(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, l.jsx)(h.Z, {
                                        application: n.record,
                                        reportId: Q
                                    }),
                                null != F(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, l.jsx)(R.Z, {
                                        application: n.record,
                                        reportId: Q
                                    })
                            ]
                        }),
                    null != F(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != ej &&
                        (0, l.jsx)(y.Z, {
                            settingsUpsells: ej,
                            channelId: n.record.channel_id,
                            onModalClose: V,
                            reportId: Q,
                            reportType: n,
                            reportSubType: H
                        }),
                    null != F(t, 'channel_preview') && 'stage_channel' === n.name && (0, l.jsx)(P.Z, { stageInstance: n.record }),
                    null != F(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, l.jsx)(I.Z, { event: n.record }),
                    null != F(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, l.jsx)(Z.Z, { entry: n.record }),
                    null != F(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, l.jsx)(j.Z, { entry: n.record }),
                    null != F(t, 'app_preview') && 'application' === n.name && (0, l.jsx)(u.Z, { entry: n.record }),
                    null != $ &&
                        (0, l.jsx)(k.Z, {
                            element: $,
                            onChange: (e, t) => {
                                let n = { ...eu };
                                e in eu ? delete n[e] : (n[e] = t), em(n), ev((0, d.VP)(en, el, $, ex, n));
                            },
                            state: eu
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, l.jsx)(g.Z, {
                            elements: el,
                            onChange: ep,
                            state: ex
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != en &&
                        en.length > 0 &&
                        (0, l.jsx)(b.Z, {
                            elements: en,
                            onChange: ep,
                            state: ex
                        }),
                    (0, l.jsxs)('div', {
                        className: w.listContainer,
                        children: [
                            (0, l.jsx)(_.Z, {
                                node: t,
                                onSelectChild: ef
                            }),
                            null != et && et.length > 0 ? (0, l.jsx)(f.Z, { elements: et }) : null
                        ]
                    }),
                    (0, l.jsx)(p.Z, {
                        errorMessage: ed,
                        onClose: () => {
                            ec('');
                        }
                    })
                ]
            }),
            (0, l.jsx)(c.Z, {
                button: t.button,
                submitting: er,
                disableNext: eh,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            V();
                            break;
                        case 'next':
                            ef(['', e.target]);
                            break;
                        case 'submit':
                            ea(!0), eZ();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: X.length > 0
            }),
            (0, l.jsx)(r.olH, {
                className: w.closeButton,
                onClick: V
            })
        ]
    });
};
