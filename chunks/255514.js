n.d(t, { Z: () => V }), n(388685), n(457542);
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
    p = n(76264),
    x = n(805746),
    b = n(822686),
    _ = n(356110),
    f = n(730719),
    h = n(996701),
    g = n(238122),
    v = n(273514),
    j = n(995712),
    y = n(763431),
    O = n(234937),
    Z = n(473121),
    I = n(497954),
    C = n(449413),
    N = n(266080),
    P = n(316617),
    S = n(15682),
    T = n(189472),
    k = n(749534),
    E = n(157759),
    w = n(521332),
    D = n(905434),
    R = n(196627),
    A = n(289809),
    M = n(739319),
    L = n(842401),
    B = n(375790),
    z = n(981631),
    U = n(388032),
    G = n(88309);
function W(e) {
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
function q(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function X(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let V = (e) => {
    let { node: t, reportType: n, reportSubType: V, history: H, onSelectChild: K, onModalClose: Y, onSubmit: Q, multiSelect: J, reportId: $, textInput: ee } = e,
        et = q(t, 'checkbox'),
        en = q(t, 'text_line_resource'),
        er = X(t, 'external_link'),
        el = X(t, 'free_text'),
        ei = X(t, 'dropdown'),
        ea = q(t, 'text'),
        [eo, es] = l.useState(!1),
        [ec, ed] = l.useState(!1),
        [eu, em] = l.useState(''),
        [ep, ex] = l.useState(() => ({})),
        [eb, e_] = l.useState(() => ({})),
        ef = l.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        eh = l.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != el || null != ei ? eb : void 0,
                multiSelect:
                    null != et
                        ? {
                              name: et.name,
                              state: ep
                          }
                        : void 0
            }),
            [t, el, ei, et, ep, eb]
        ),
        eg = l.useMemo(() => (0, s.VP)(el, ei, et, eb, ep), [el, ei, et, eb, ep]),
        ev = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = W({}, eb);
            (r[e] = {
                value: t,
                isValid: n
            }),
                e_(r);
        },
        ej = (e) => {
            K(eh(e));
        };
    l.useEffect(() => {
        null != J && ex(J), null != ee && e_(ee);
    }, [J, ee]),
        l.useEffect(() => {
            if (null != et) {
                let e = et.data;
                if (null != e)
                    for (let [t, n, r, l] of e)
                        l &&
                            ex((e) =>
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                              }),
                                        e
                                    );
                                })(W({}, e), { [t]: n })
                            );
            }
        }, [et]);
    let ey = (e) => {
            e === z.evJ.INVALID_FORM_BODY ? em(U.intl.string(U.t.VjAAuL)) : em(U.intl.string(U.t.h6D8V1));
        },
        eO = () => {
            let t = ['', e.successNodeId];
            Q(eh(t))
                .then(() => {
                    em(''), ej(t);
                })
                .catch((e) => {
                    var t;
                    ey(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    es(!1);
                });
        };
    l.useEffect(() => {
        t.is_auto_submit && !ec && (ed(!0), Q(eh(['', t.id])));
    }, [t.is_auto_submit, ec, Q, eh, t.id]);
    let eZ = (0, o.fW)(V),
        eI = null != q(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: G.container,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                direction: a.Z.Direction.VERTICAL,
                className: G.header,
                children: [(0, r.jsx)(R.Z, { element: q(t, 'success') }), (0, r.jsx)(Z.Z, { node: t }), (0, r.jsx)(C.Z, { node: t })]
            }),
            (0, r.jsxs)(i.hzk, {
                className: G.body,
                children: [
                    null != en && (0, r.jsx)(M.Z, { element: en }),
                    null != ea && (0, r.jsx)(A.Z, { element: ea }),
                    null != q(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name || 'report_to_mod_message' === n.name) && (0, r.jsx)(P.Z, { message: n.record }),
                    null != q(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(L.Z, { user: n.record }) : null,
                    null != q(t, 'guild_preview') && 'guild' === n.name ? (0, r.jsx)(y.Z, { guild: n.record }) : null,
                    null != q(t, 'breadcrumbs') && (0, r.jsx)(m.Z, { history: H }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return B.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(k.Z, {
                            children: [
                                eI &&
                                    (0, r.jsx)(I.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: ef,
                                        reportId: $
                                    }),
                                null != q(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || 'report_to_mod_message' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(u.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: ef,
                                        reportId: $,
                                        reportType: n
                                    }),
                                !eI &&
                                    null != q(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || 'report_to_mod_message' === n.name) &&
                                    (0, r.jsx)(T.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: ef,
                                        reportId: $
                                    }),
                                null != q(t, 'delete_message') &&
                                    ('message' === n.name || 'report_to_mod_message' === n.name) &&
                                    (0, r.jsx)(b.Z, {
                                        message: n.record,
                                        reportId: $
                                    }),
                                null != q(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(N.Z, {
                                        guildId: n.record.id,
                                        reportId: $
                                    }),
                                null != q(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(x.Z, {
                                        application: n.record,
                                        reportId: $
                                    }),
                                null != q(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        application: n.record,
                                        reportId: $
                                    })
                            ]
                        }),
                    null != q(t, 'settings_upsells') &&
                        ('message' === n.name || 'report_to_mod_message' === n.name) &&
                        null != eZ &&
                        (0, r.jsx)(w.Z, {
                            settingsUpsells: eZ,
                            channelId: n.record.channel_id,
                            onModalClose: Y,
                            reportId: $,
                            reportType: n,
                            reportSubType: V
                        }),
                    null != q(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(D.Z, { stageInstance: n.record }),
                    null != q(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(O.Z, { event: n.record }),
                    null != q(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(v.Z, { entry: n.record }),
                    null != q(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(j.Z, { entry: n.record }),
                    null != q(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(d.Z, { entry: n.record }),
                    null != et &&
                        (0, r.jsx)(S.Z, {
                            element: et,
                            onChange: (e, t) => {
                                let n = W({}, ep);
                                e in ep ? delete n[e] : (n[e] = t), ex(n);
                            },
                            state: ep
                        }),
                    F.includes(n.name) &&
                        null != ei &&
                        ei.length > 0 &&
                        (0, r.jsx)(_.Z, {
                            elements: ei,
                            onChange: ev,
                            state: eb
                        }),
                    F.includes(n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, r.jsx)(g.Z, {
                            elements: el,
                            onChange: ev,
                            state: eb
                        }),
                    (0, r.jsxs)('div', {
                        className: G.listContainer,
                        children: [
                            (0, r.jsx)(p.Z, {
                                node: t,
                                onSelectChild: ej
                            }),
                            null != er && er.length > 0 ? (0, r.jsx)(h.Z, { elements: er }) : null
                        ]
                    }),
                    (0, r.jsx)(f.Z, {
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
                disableNext: eg,
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
                            es(!0), eO();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: H.length > 0
            }),
            (0, r.jsx)(i.olH, {
                className: G.closeButton,
                onClick: Y
            })
        ]
    });
};
