n.d(t, { Z: () => K }), n(388685), n(457542);
var r = n(255367),
    a = n(73800),
    i = n(741086),
    l = n(481060),
    o = n(600164),
    s = n(155647),
    c = n(185625),
    d = n(273389),
    u = n(778231),
    m = n(816342),
    p = n(15667),
    _ = n(76264),
    g = n(805746),
    b = n(822686),
    x = n(356110),
    h = n(730719),
    f = n(996701),
    v = n(238122),
    j = n(273514),
    C = n(995712),
    y = n(763431),
    I = n(234937),
    O = n(473121),
    T = n(497954),
    Z = n(449413),
    N = n(266080),
    S = n(316617),
    P = n(15682),
    k = n(189472),
    E = n(749534),
    M = n(157759),
    w = n(521332),
    A = n(905434),
    R = n(196627),
    D = n(289809),
    B = n(739319),
    L = n(842401),
    z = n(375790),
    U = n(981631),
    G = n(388032),
    F = n(130883),
    W = n(88309);
function H(e) {
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
let X = ['user_urf', 'message_urf', 'guild_urf'];
function V(e, t) {
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
let K = (e) => {
    let { node: t, reportType: n, reportSubType: K, history: Y, onSelectChild: Q, onModalClose: J, onSubmit: $, multiSelect: ee, reportId: et, textInput: en } = e,
        er = V(t, 'checkbox'),
        ea = V(t, 'text_line_resource'),
        ei = q(t, 'external_link'),
        el = q(t, 'free_text'),
        eo = q(t, 'dropdown'),
        es = V(t, 'text'),
        ec = i.s.REPORT_TO_MOD.has(n.name),
        [ed, eu] = a.useState(!1),
        [em, ep] = a.useState(!1),
        [e_, eg] = a.useState(''),
        [eb, ex] = a.useState(() => ({})),
        [eh, ef] = a.useState(() => ({})),
        ev = a.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        ej = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != el || null != eo ? eh : void 0,
                multiSelect:
                    null != er
                        ? {
                              name: er.name,
                              state: eb
                          }
                        : void 0
            }),
            [t, el, eo, er, eb, eh]
        ),
        eC = a.useMemo(() => (0, c.VP)(el, eo, er, eh, eb), [el, eo, er, eh, eb]),
        ey = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = H({}, eh);
            (r[e] = {
                value: t,
                isValid: n
            }),
                ef(r);
        },
        eI = (e) => {
            Q(ej(e));
        };
    a.useEffect(() => {
        null != ee && ex(ee), null != en && ef(en);
    }, [ee, en]),
        a.useEffect(() => {
            if (null != er) {
                let e = er.data;
                if (null != e)
                    for (let [t, n, r, a] of e)
                        a &&
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
                                })(H({}, e), { [t]: n })
                            );
            }
        }, [er]);
    let eO = (e) => {
            e === U.evJ.INVALID_FORM_BODY ? eg(G.intl.string(G.t.VjAAuL)) : ec ? eg(G.intl.string(F.default.psKFdH)) : eg(G.intl.string(G.t.h6D8V1));
        },
        eT = () => {
            let t = ['', e.successNodeId];
            $(ej(t))
                .then(() => {
                    eg(''), eI(t);
                })
                .catch((e) => {
                    var t;
                    eO(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    eu(!1);
                });
        };
    a.useEffect(() => {
        t.is_auto_submit && !em && (ep(!0), $(ej(['', t.id])));
    }, [t.is_auto_submit, em, $, ej, t.id]);
    let eZ = (0, s.fW)(K),
        eN = null != V(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: W.container,
        children: [
            (0, r.jsxs)(l.xBx, {
                separator: !1,
                direction: o.Z.Direction.VERTICAL,
                className: W.header,
                children: [
                    (0, r.jsx)(R.Z, { element: V(t, 'success') }),
                    (0, r.jsx)(O.Z, {
                        node: t,
                        isModeratorReport: ec
                    }),
                    (0, r.jsx)(Z.Z, { node: t })
                ]
            }),
            (0, r.jsxs)(l.hzk, {
                className: W.body,
                children: [
                    null != ea && (0, r.jsx)(B.Z, { element: ea }),
                    null != es && (0, r.jsx)(D.Z, { element: es }),
                    null != V(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name || 'report_to_mod_message' === n.name) && (0, r.jsx)(S.Z, { message: n.record }),
                    null != V(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(L.Z, { user: n.record }) : null,
                    null != V(t, 'guild_preview') && 'guild' === n.name ? (0, r.jsx)(y.Z, { guild: n.record }) : null,
                    null != V(t, 'breadcrumbs') &&
                        (0, r.jsx)(p.Z, {
                            isModeratorReport: ec,
                            history: Y
                        }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return z.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(E.Z, {
                            children: [
                                eN &&
                                    (0, r.jsx)(T.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et
                                    }),
                                null != V(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || 'report_to_mod_message' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                    (0, r.jsx)(m.Z, {
                                        user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et,
                                        reportType: n
                                    }),
                                !eN &&
                                    null != V(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || 'report_to_mod_message' === n.name) &&
                                    (0, r.jsx)(k.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et
                                    }),
                                null != V(t, 'delete_message') &&
                                    ('message' === n.name || 'report_to_mod_message' === n.name) &&
                                    (0, r.jsx)(b.Z, {
                                        message: n.record,
                                        reportId: et
                                    }),
                                null != V(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(N.Z, {
                                        guildId: n.record.id,
                                        reportId: et
                                    }),
                                null != V(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(g.Z, {
                                        application: n.record,
                                        reportId: et
                                    }),
                                null != V(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(M.Z, {
                                        application: n.record,
                                        reportId: et
                                    })
                            ]
                        }),
                    null != V(t, 'settings_upsells') &&
                        ('message' === n.name || 'report_to_mod_message' === n.name) &&
                        null != eZ &&
                        (0, r.jsx)(w.Z, {
                            settingsUpsells: eZ,
                            channelId: n.record.channel_id,
                            onModalClose: J,
                            reportId: et,
                            reportType: n,
                            reportSubType: K
                        }),
                    null != V(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(A.Z, { stageInstance: n.record }),
                    null != V(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(I.Z, { event: n.record }),
                    null != V(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(j.Z, { entry: n.record }),
                    null != V(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(C.Z, { entry: n.record }),
                    null != V(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(u.Z, { entry: n.record }),
                    null != er &&
                        (0, r.jsx)(P.Z, {
                            element: er,
                            onChange: (e, t) => {
                                let n = H({}, eb);
                                e in eb ? delete n[e] : (n[e] = t), ex(n);
                            },
                            state: eb
                        }),
                    X.includes(n.name) &&
                        null != eo &&
                        eo.length > 0 &&
                        (0, r.jsx)(x.Z, {
                            elements: eo,
                            onChange: ey,
                            state: eh
                        }),
                    X.includes(n.name) &&
                        null != el &&
                        el.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: el,
                            onChange: ey,
                            state: eh
                        }),
                    (0, r.jsxs)('div', {
                        className: W.listContainer,
                        children: [
                            (0, r.jsx)(_.Z, {
                                node: t,
                                onSelectChild: eI
                            }),
                            null != ei && ei.length > 0 ? (0, r.jsx)(f.Z, { elements: ei }) : null
                        ]
                    }),
                    (0, r.jsx)(h.Z, {
                        errorMessage: e_,
                        onClose: () => {
                            eg('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(d.Z, {
                button: t.button,
                submitting: ed,
                disableNext: eC,
                isModeratorReport: ec,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            J();
                            break;
                        case 'next':
                            eI(['', e.target]);
                            break;
                        case 'submit':
                            eu(!0), eT();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: Y.length > 0
            }),
            (0, r.jsx)(l.olH, {
                className: W.closeButton,
                onClick: J
            })
        ]
    });
};
