n.d(t, { Z: () => X }), n(47120), n(773603);
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
    N = n(234937),
    y = n(473121),
    O = n(497954),
    Z = n(449413),
    I = n(266080),
    C = n(316617),
    T = n(15682),
    S = n(189472),
    P = n(749534),
    k = n(157759),
    E = n(521332),
    W = n(905434),
    L = n(196627),
    w = n(289809),
    D = n(739319),
    A = n(842401),
    R = n(375790),
    M = n(981631),
    B = n(388032),
    z = n(522627);
function U(e) {
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
function G(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function F(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let X = (e) => {
    let { node: t, reportType: n, reportSubType: X, history: q, onSelectChild: V, onModalClose: H, onSubmit: K, multiSelect: Y, reportId: Q, textInput: J } = e,
        $ = G(t, 'checkbox'),
        ee = G(t, 'text_line_resource'),
        et = F(t, 'external_link'),
        en = F(t, 'free_text'),
        er = F(t, 'dropdown'),
        el = G(t, 'text'),
        [ei, ea] = l.useState(!1),
        [eo, es] = l.useState(!1),
        [ec, ed] = l.useState(''),
        [eu, em] = l.useState(() => ({})),
        [ex, ep] = l.useState(() => ({})),
        [ef, eb] = l.useState((0, s.VP)(en, er, $, J, Y)),
        eh = l.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        e_ = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = U({}, ex);
            (r[e] = {
                value: t,
                isValid: n
            }),
                ep(r),
                eb((0, s.VP)(en, er, $, r, eu));
        },
        eg = l.useMemo(
            () => (e) => {
                V({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != en || null != er ? ex : void 0,
                    multiSelect:
                        null != $
                            ? {
                                  name: $.name,
                                  state: eu
                              }
                            : void 0
                });
            },
            [t, V, $, eu, ex, en, er]
        );
    l.useEffect(() => {
        null != Y && em(Y), null != J && ep(J);
    }, [Y, J]);
    let ev = (e) => {
            e === M.evJ.INVALID_FORM_BODY ? ed(B.NW.string(B.t.VjAAuL)) : ed(B.NW.string(B.t.h6D8V1));
        },
        ej = () =>
            K({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ed(''), eg(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    ev(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    ea(!1);
                });
    l.useEffect(() => {
        t.is_auto_submit &&
            !eo &&
            (es(!0),
            K({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, eo, K, t.id]);
    let eN = (0, o.fW)(X),
        ey = null != G(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: z.container,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                direction: a.Z.Direction.VERTICAL,
                className: z.header,
                children: [(0, r.jsx)(L.Z, { element: G(t, 'success') }), (0, r.jsx)(y.Z, { node: t }), (0, r.jsx)(Z.Z, { node: t })]
            }),
            (0, r.jsxs)(i.hzk, {
                className: z.body,
                children: [
                    null != ee && (0, r.jsx)(D.Z, { element: ee }),
                    null != el && (0, r.jsx)(w.Z, { element: el }),
                    null != G(t, 'breadcrumbs') && (0, r.jsx)(m.Z, { history: q }),
                    null != G(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(C.Z, { message: n.record }),
                    null != G(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(A.Z, { user: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return R.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(P.Z, {
                            children: [
                                ey &&
                                    (0, r.jsx)(O.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eh,
                                        reportId: Q
                                    }),
                                null != G(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(u.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: eh,
                                        reportId: Q,
                                        reportType: n
                                    }),
                                !ey &&
                                    null != G(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(S.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: eh,
                                        reportId: Q
                                    }),
                                null != G(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, r.jsx)(f.Z, {
                                        message: n.record,
                                        reportId: Q
                                    }),
                                null != G(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(I.Z, {
                                        guildId: n.record.id,
                                        reportId: Q
                                    }),
                                null != G(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(p.Z, {
                                        application: n.record,
                                        reportId: Q
                                    }),
                                null != G(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(k.Z, {
                                        application: n.record,
                                        reportId: Q
                                    })
                            ]
                        }),
                    null != G(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eN &&
                        (0, r.jsx)(E.Z, {
                            settingsUpsells: eN,
                            channelId: n.record.channel_id,
                            onModalClose: H,
                            reportId: Q,
                            reportType: n,
                            reportSubType: X
                        }),
                    null != G(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(W.Z, { stageInstance: n.record }),
                    null != G(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(N.Z, { event: n.record }),
                    null != G(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(v.Z, { entry: n.record }),
                    null != G(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(j.Z, { entry: n.record }),
                    null != G(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(d.Z, { entry: n.record }),
                    null != $ &&
                        (0, r.jsx)(T.Z, {
                            element: $,
                            onChange: (e, t) => {
                                let n = U({}, eu);
                                e in eu ? delete n[e] : (n[e] = t), em(n), eb((0, s.VP)(en, er, $, ex, n));
                            },
                            state: eu
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != er &&
                        er.length > 0 &&
                        (0, r.jsx)(b.Z, {
                            elements: er,
                            onChange: e_,
                            state: ex
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != en &&
                        en.length > 0 &&
                        (0, r.jsx)(g.Z, {
                            elements: en,
                            onChange: e_,
                            state: ex
                        }),
                    (0, r.jsxs)('div', {
                        className: z.listContainer,
                        children: [
                            (0, r.jsx)(x.Z, {
                                node: t,
                                onSelectChild: eg
                            }),
                            null != et && et.length > 0 ? (0, r.jsx)(_.Z, { elements: et }) : null
                        ]
                    }),
                    (0, r.jsx)(h.Z, {
                        errorMessage: ec,
                        onClose: () => {
                            ed('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                button: t.button,
                submitting: ei,
                disableNext: ef,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            H();
                            break;
                        case 'next':
                            eg(['', e.target]);
                            break;
                        case 'submit':
                            ea(!0), ej();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: q.length > 0
            }),
            (0, r.jsx)(i.olH, {
                className: z.closeButton,
                onClick: H
            })
        ]
    });
};
