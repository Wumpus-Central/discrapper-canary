n.d(t, { Z: () => V }), n(47120), n(773603);
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(600164),
    o = n(155647),
    s = n(185625),
    c = n(273389),
    d = n(778231),
    u = n(816342),
    m = n(15667),
    x = n(76264),
    p = n(805746),
    f = n(822686),
    b = n(356110),
    h = n(730719),
    _ = n(996701),
    g = n(238122),
    v = n(273514),
    j = n(995712),
    N = n(763431),
    y = n(234937),
    O = n(473121),
    Z = n(497954),
    I = n(449413),
    C = n(266080),
    T = n(316617),
    S = n(15682),
    P = n(189472),
    k = n(749534),
    E = n(157759),
    W = n(521332),
    L = n(905434),
    w = n(196627),
    A = n(289809),
    D = n(739319),
    R = n(842401),
    M = n(375790),
    B = n(981631),
    z = n(388032),
    U = n(88309);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let F = ['user_urf', 'message_urf', 'guild_urf'];
function X(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function q(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let V = (e) => {
    let { node: t, reportType: n, reportSubType: V, history: H, onSelectChild: K, onModalClose: Y, onSubmit: Q, multiSelect: J, reportId: $, textInput: ee } = e,
        et = X(t, 'checkbox'),
        en = X(t, 'text_line_resource'),
        er = q(t, 'external_link'),
        el = q(t, 'free_text'),
        ei = q(t, 'dropdown'),
        ea = X(t, 'text'),
        [eo, es] = l.useState(!1),
        [ec, ed] = l.useState(!1),
        [eu, em] = l.useState(''),
        [ex, ep] = l.useState(() => ({})),
        [ef, eb] = l.useState(() => ({})),
        [eh, e_] = l.useState((0, s.VP)(el, ei, et, ee, J)),
        eg = l.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        ev = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = G({}, ef);
            (r[e] = {
                value: t,
                isValid: n
            }),
                eb(r),
                e_((0, s.VP)(el, ei, et, r, ex));
        },
        ej = l.useMemo(
            () => (e) => {
                K({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != el || null != ei ? ef : void 0,
                    multiSelect:
                        null != et
                            ? {
                                  name: et.name,
                                  state: ex
                              }
                            : void 0
                });
            },
            [t, K, et, ex, ef, el, ei]
        );
    l.useEffect(() => {
        null != J && ep(J), null != ee && eb(ee);
    }, [J, ee]);
    let eN = (e) => {
            e === B.evJ.INVALID_FORM_BODY ? em(z.NW.string(z.t.VjAAuL)) : em(z.NW.string(z.t.h6D8V1));
        },
        ey = () =>
            Q({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    em(''), ej(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    eN(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    es(!1);
                });
    l.useEffect(() => {
        t.is_auto_submit &&
            !ec &&
            (ed(!0),
            Q({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, ec, Q, t.id]);
    let eO = (0, o.fW)(V),
        eZ = null != X(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: U.container,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                direction: a.Z.Direction.VERTICAL,
                className: U.header,
                children: [(0, r.jsx)(w.Z, { element: X(t, 'success') }), (0, r.jsx)(O.Z, { node: t }), (0, r.jsx)(I.Z, { node: t })]
            }),
            (0, r.jsxs)(i.hzk, {
                className: U.body,
                children: [
                    null != en && (0, r.jsx)(D.Z, { element: en }),
                    null != ea && (0, r.jsx)(A.Z, { element: ea }),
                    null != X(t, 'breadcrumbs') && (0, r.jsx)(m.Z, { history: H }),
                    null != X(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(T.Z, { message: n.record }),
                    null != X(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(R.Z, { user: n.record }) : null,
                    null != X(t, 'guild_preview') && 'guild' === n.name ? (0, r.jsx)(N.Z, { guild: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return M.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(k.Z, {
                            children: [
                                eZ &&
                                    (0, r.jsx)(Z.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: $
                                    }),
                                null != X(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(u.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: $,
                                        reportType: n
                                    }),
                                !eZ &&
                                    null != X(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(P.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eg,
                                        reportId: $
                                    }),
                                null != X(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, r.jsx)(f.Z, {
                                        message: n.record,
                                        reportId: $
                                    }),
                                null != X(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(C.Z, {
                                        guildId: n.record.id,
                                        reportId: $
                                    }),
                                null != X(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(p.Z, {
                                        application: n.record,
                                        reportId: $
                                    }),
                                null != X(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        application: n.record,
                                        reportId: $
                                    })
                            ]
                        }),
                    null != X(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eO &&
                        (0, r.jsx)(W.Z, {
                            settingsUpsells: eO,
                            channelId: n.record.channel_id,
                            onModalClose: Y,
                            reportId: $,
                            reportType: n,
                            reportSubType: V
                        }),
                    null != X(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(L.Z, { stageInstance: n.record }),
                    null != X(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(y.Z, { event: n.record }),
                    null != X(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(v.Z, { entry: n.record }),
                    null != X(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(j.Z, { entry: n.record }),
                    null != X(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(d.Z, { entry: n.record }),
                    null != et &&
                        (0, r.jsx)(S.Z, {
                            element: et,
                            onChange: (e, t) => {
                                let n = G({}, ex);
                                e in ex ? delete n[e] : (n[e] = t), ep(n), e_((0, s.VP)(el, ei, et, ef, n));
                            },
                            state: ex
                        }),
                    F.includes(n.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, r.jsx)(b.Z, {
                            elements: ei,
                            onChange: ev,
                            state: ef
                        }),
                    F.includes(n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, r.jsx)(g.Z, {
                            elements: el,
                            onChange: ev,
                            state: ef
                        }),
                    (0, r.jsxs)('div', {
                        className: U.listContainer,
                        children: [
                            (0, r.jsx)(x.Z, {
                                node: t,
                                onSelectChild: ej
                            }),
                            null != er && er.length > 0 ? (0, r.jsx)(_.Z, { elements: er }) : null
                        ]
                    }),
                    (0, r.jsx)(h.Z, {
                        errorMessage: eu,
                        onClose: () => {
                            em('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                button: t.button,
                submitting: eo,
                disableNext: eh,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            Y();
                            break;
                        case 'next':
                            ej(['', e.target]);
                            break;
                        case 'submit':
                            es(!0), ey();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: H.length > 0
            }),
            (0, r.jsx)(i.olH, {
                className: U.closeButton,
                onClick: Y
            })
        ]
    });
};
