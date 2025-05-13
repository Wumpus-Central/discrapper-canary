n.d(t, { Z: () => K }), n(388685), n(457542);
var r = n(255367),
    l = n(73800),
    i = n(741086),
    a = n(481060),
    o = n(600164),
    s = n(155647),
    c = n(185625),
    d = n(273389),
    u = n(778231),
    m = n(816342),
    p = n(15667),
    x = n(76264),
    b = n(805746),
    _ = n(822686),
    f = n(356110),
    h = n(730719),
    g = n(996701),
    v = n(238122),
    j = n(273514),
    y = n(995712),
    O = n(763431),
    Z = n(234937),
    I = n(473121),
    C = n(497954),
    N = n(449413),
    P = n(266080),
    S = n(316617),
    T = n(15682),
    k = n(189472),
    E = n(749534),
    w = n(157759),
    R = n(521332),
    D = n(905434),
    M = n(196627),
    A = n(289809),
    L = n(739319),
    B = n(842401),
    z = n(375790),
    U = n(981631),
    G = n(388032),
    W = n(776571),
    F = n(88309);
function q(e) {
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
function H(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let K = (e) => {
    let { node: t, reportType: n, reportSubType: K, history: Y, onSelectChild: Q, onModalClose: J, onSubmit: $, multiSelect: ee, reportId: et, textInput: en } = e,
        er = V(t, 'checkbox'),
        el = V(t, 'text_line_resource'),
        ei = H(t, 'external_link'),
        ea = H(t, 'free_text'),
        eo = H(t, 'dropdown'),
        es = V(t, 'text'),
        ec = i.s.REPORT_TO_MOD.has(n.name),
        [ed, eu] = l.useState(!1),
        [em, ep] = l.useState(!1),
        [ex, eb] = l.useState(''),
        [e_, ef] = l.useState(() => ({})),
        [eh, eg] = l.useState(() => ({})),
        ev = l.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        ej = l.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != ea || null != eo ? eh : void 0,
                multiSelect:
                    null != er
                        ? {
                              name: er.name,
                              state: e_
                          }
                        : void 0
            }),
            [t, ea, eo, er, e_, eh]
        ),
        ey = l.useMemo(() => (0, c.VP)(ea, eo, er, eh, e_), [ea, eo, er, eh, e_]),
        eO = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = q({}, eh);
            (r[e] = {
                value: t,
                isValid: n
            }),
                eg(r);
        },
        eZ = (e) => {
            Q(ej(e));
        };
    l.useEffect(() => {
        null != ee && ef(ee), null != en && eg(en);
    }, [ee, en]),
        l.useEffect(() => {
            if (null != er) {
                let e = er.data;
                if (null != e)
                    for (let [t, n, r, l] of e)
                        l &&
                            ef((e) =>
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
                                })(q({}, e), { [t]: n })
                            );
            }
        }, [er]);
    let eI = (e) => {
            e === U.evJ.INVALID_FORM_BODY ? eb(G.intl.string(G.t.VjAAuL)) : ec ? eb(G.intl.string(W.default.psKFdH)) : eb(G.intl.string(G.t.h6D8V1));
        },
        eC = () => {
            let t = ['', e.successNodeId];
            $(ej(t))
                .then(() => {
                    eb(''), eZ(t);
                })
                .catch((e) => {
                    var t;
                    eI(null == (t = e.body) ? void 0 : t.code);
                })
                .finally(() => {
                    eu(!1);
                });
        };
    l.useEffect(() => {
        t.is_auto_submit && !em && (ep(!0), $(ej(['', t.id])));
    }, [t.is_auto_submit, em, $, ej, t.id]);
    let eN = (0, s.fW)(K),
        eP = null != V(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: F.container,
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                direction: o.Z.Direction.VERTICAL,
                className: F.header,
                children: [
                    (0, r.jsx)(M.Z, { element: V(t, 'success') }),
                    (0, r.jsx)(I.Z, {
                        node: t,
                        isModeratorReport: ec
                    }),
                    (0, r.jsx)(N.Z, { node: t })
                ]
            }),
            (0, r.jsxs)(a.hzk, {
                className: F.body,
                children: [
                    null != el && (0, r.jsx)(L.Z, { element: el }),
                    null != es && (0, r.jsx)(A.Z, { element: es }),
                    null != V(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name || 'report_to_mod_message' === n.name) && (0, r.jsx)(S.Z, { message: n.record }),
                    null != V(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(B.Z, { user: n.record }) : null,
                    null != V(t, 'guild_preview') && 'guild' === n.name ? (0, r.jsx)(O.Z, { guild: n.record }) : null,
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
                                eP &&
                                    (0, r.jsx)(C.Z, {
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
                                !eP &&
                                    null != V(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || 'report_to_mod_message' === n.name) &&
                                    (0, r.jsx)(k.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        channelId: ev,
                                        reportId: et
                                    }),
                                null != V(t, 'delete_message') &&
                                    ('message' === n.name || 'report_to_mod_message' === n.name) &&
                                    (0, r.jsx)(_.Z, {
                                        message: n.record,
                                        reportId: et
                                    }),
                                null != V(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(P.Z, {
                                        guildId: n.record.id,
                                        reportId: et
                                    }),
                                null != V(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(b.Z, {
                                        application: n.record,
                                        reportId: et
                                    }),
                                null != V(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(w.Z, {
                                        application: n.record,
                                        reportId: et
                                    })
                            ]
                        }),
                    null != V(t, 'settings_upsells') &&
                        ('message' === n.name || 'report_to_mod_message' === n.name) &&
                        null != eN &&
                        (0, r.jsx)(R.Z, {
                            settingsUpsells: eN,
                            channelId: n.record.channel_id,
                            onModalClose: J,
                            reportId: et,
                            reportType: n,
                            reportSubType: K
                        }),
                    null != V(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(D.Z, { stageInstance: n.record }),
                    null != V(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(Z.Z, { event: n.record }),
                    null != V(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(j.Z, { entry: n.record }),
                    null != V(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(y.Z, { entry: n.record }),
                    null != V(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(u.Z, { entry: n.record }),
                    null != er &&
                        (0, r.jsx)(T.Z, {
                            element: er,
                            onChange: (e, t) => {
                                let n = q({}, e_);
                                e in e_ ? delete n[e] : (n[e] = t), ef(n);
                            },
                            state: e_
                        }),
                    X.includes(n.name) &&
                        null != eo &&
                        eo.length > 0 &&
                        (0, r.jsx)(f.Z, {
                            elements: eo,
                            onChange: eO,
                            state: eh
                        }),
                    X.includes(n.name) &&
                        null != ea &&
                        ea.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            elements: ea,
                            onChange: eO,
                            state: eh
                        }),
                    (0, r.jsxs)('div', {
                        className: F.listContainer,
                        children: [
                            (0, r.jsx)(x.Z, {
                                node: t,
                                onSelectChild: eZ
                            }),
                            null != ei && ei.length > 0 ? (0, r.jsx)(g.Z, { elements: ei }) : null
                        ]
                    }),
                    (0, r.jsx)(h.Z, {
                        errorMessage: ex,
                        onClose: () => {
                            eb('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(d.Z, {
                button: t.button,
                submitting: ed,
                disableNext: ey,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            J();
                            break;
                        case 'next':
                            eZ(['', e.target]);
                            break;
                        case 'submit':
                            eu(!0), eC();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: Y.length > 0
            }),
            (0, r.jsx)(a.olH, {
                className: F.closeButton,
                onClick: J
            })
        ]
    });
};
