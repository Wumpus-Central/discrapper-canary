n.d(t, { Z: () => q }), n(47120), n(773603);
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
function F(e, t) {
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
let q = (e) => {
    let { node: t, reportType: n, reportSubType: q, history: V, onSelectChild: H, onModalClose: K, onSubmit: Y, multiSelect: Q, reportId: J, textInput: $ } = e,
        ee = F(t, 'checkbox'),
        et = F(t, 'text_line_resource'),
        en = X(t, 'external_link'),
        er = X(t, 'free_text'),
        el = X(t, 'dropdown'),
        ei = F(t, 'text'),
        [ea, eo] = l.useState(!1),
        [es, ec] = l.useState(!1),
        [ed, eu] = l.useState(''),
        [em, ex] = l.useState(() => ({})),
        [ep, ef] = l.useState(() => ({})),
        [eb, eh] = l.useState((0, s.VP)(er, el, ee, $, Q)),
        e_ = l.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        eg = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = G({}, ep);
            (r[e] = {
                value: t,
                isValid: n
            }),
                ef(r),
                eh((0, s.VP)(er, el, ee, r, em));
        },
        ev = l.useMemo(
            () => (e) => {
                H({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != er || null != el ? ep : void 0,
                    multiSelect:
                        null != ee
                            ? {
                                  name: ee.name,
                                  state: em
                              }
                            : void 0
                });
            },
            [t, H, ee, em, ep, er, el]
        );
    l.useEffect(() => {
        null != Q && ex(Q), null != $ && ef($);
    }, [Q, $]);
    let ej = (e) => {
            e === B.evJ.INVALID_FORM_BODY ? eu(z.NW.string(z.t.VjAAuL)) : eu(z.NW.string(z.t.h6D8V1));
        },
        eN = () =>
            Y({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    eu(''), ev(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    ej(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    eo(!1);
                });
    l.useEffect(() => {
        t.is_auto_submit &&
            !es &&
            (ec(!0),
            Y({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, es, Y, t.id]);
    let ey = (0, o.fW)(q),
        eO = null != F(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: U.container,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                direction: a.Z.Direction.VERTICAL,
                className: U.header,
                children: [(0, r.jsx)(w.Z, { element: F(t, 'success') }), (0, r.jsx)(O.Z, { node: t }), (0, r.jsx)(I.Z, { node: t })]
            }),
            (0, r.jsxs)(i.hzk, {
                className: U.body,
                children: [
                    null != et && (0, r.jsx)(D.Z, { element: et }),
                    null != ei && (0, r.jsx)(A.Z, { element: ei }),
                    null != F(t, 'breadcrumbs') && (0, r.jsx)(m.Z, { history: V }),
                    null != F(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(T.Z, { message: n.record }),
                    null != F(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(R.Z, { user: n.record }) : null,
                    null != F(t, 'guild_preview') && 'guild' === n.name ? (0, r.jsx)(N.Z, { guild: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return M.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(k.Z, {
                            children: [
                                eO &&
                                    (0, r.jsx)(Z.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: e_,
                                        reportId: J
                                    }),
                                null != F(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(u.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: e_,
                                        reportId: J,
                                        reportType: n
                                    }),
                                !eO &&
                                    null != F(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(P.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: e_,
                                        reportId: J
                                    }),
                                null != F(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, r.jsx)(f.Z, {
                                        message: n.record,
                                        reportId: J
                                    }),
                                null != F(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(C.Z, {
                                        guildId: n.record.id,
                                        reportId: J
                                    }),
                                null != F(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(p.Z, {
                                        application: n.record,
                                        reportId: J
                                    }),
                                null != F(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(E.Z, {
                                        application: n.record,
                                        reportId: J
                                    })
                            ]
                        }),
                    null != F(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != ey &&
                        (0, r.jsx)(W.Z, {
                            settingsUpsells: ey,
                            channelId: n.record.channel_id,
                            onModalClose: K,
                            reportId: J,
                            reportType: n,
                            reportSubType: q
                        }),
                    null != F(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(L.Z, { stageInstance: n.record }),
                    null != F(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(y.Z, { event: n.record }),
                    null != F(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(v.Z, { entry: n.record }),
                    null != F(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(j.Z, { entry: n.record }),
                    null != F(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(d.Z, { entry: n.record }),
                    null != ee &&
                        (0, r.jsx)(S.Z, {
                            element: ee,
                            onChange: (e, t) => {
                                let n = G({}, em);
                                e in em ? delete n[e] : (n[e] = t), ex(n), eh((0, s.VP)(er, el, ee, ep, n));
                            },
                            state: em
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, r.jsx)(b.Z, {
                            elements: el,
                            onChange: eg,
                            state: ep
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != er &&
                        er.length > 0 &&
                        (0, r.jsx)(g.Z, {
                            elements: er,
                            onChange: eg,
                            state: ep
                        }),
                    (0, r.jsxs)('div', {
                        className: U.listContainer,
                        children: [
                            (0, r.jsx)(x.Z, {
                                node: t,
                                onSelectChild: ev
                            }),
                            null != en && en.length > 0 ? (0, r.jsx)(_.Z, { elements: en }) : null
                        ]
                    }),
                    (0, r.jsx)(h.Z, {
                        errorMessage: ed,
                        onClose: () => {
                            eu('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                button: t.button,
                submitting: ea,
                disableNext: eb,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            K();
                            break;
                        case 'next':
                            ev(['', e.target]);
                            break;
                        case 'submit':
                            eo(!0), eN();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: V.length > 0
            }),
            (0, r.jsx)(i.olH, {
                className: U.closeButton,
                onClick: K
            })
        ]
    });
};
