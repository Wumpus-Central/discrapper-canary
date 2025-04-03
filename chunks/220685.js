n.d(t, { Z: () => R }), n(47120), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    g = n(215569),
    p = n(481060),
    h = n(484614),
    f = n(852860),
    b = n(782568),
    x = n(367907),
    j = n(674180),
    N = n(999382),
    _ = n(626135),
    v = n(730647),
    C = n(584825),
    O = n(981631),
    y = n(388032),
    I = n(111558);
let E = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    S = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    T = E[4],
    P = (e) => {
        var t, n;
        let { guild: s, canEnable: l } = e,
            c = (0, C.YB)(s.id),
            { loading: u, updateSubscriptionsSettings: N } = (0, C.QV)(),
            [v, P] = i.useState(s.hasFeature(O.oNc.CREATOR_STORE_PAGE)),
            [w, R] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : T),
            [Z, D] = i.useState(null == c ? void 0 : c.store_page_trailer_url),
            A = null == Z || null != Z.match(S),
            [k, W] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n),
            L = i.useRef(null == c ? void 0 : c.store_page_slug).current,
            M = v !== s.hasFeature(O.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && w !== T) || ((null == c ? void 0 : c.store_page_primary_color) != null && w !== (null == c ? void 0 : c.store_page_primary_color)) || Z !== (null == c ? void 0 : c.store_page_trailer_url) || (null != k && k !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            G = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                v !== s.hasFeature(O.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = v),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && w !== T) || ((null == c ? void 0 : c.store_page_primary_color) != null && w !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = w),
                    Z !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = Z),
                    k !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = k),
                    !d().isEmpty(e) &&
                        (await N(s.id, e),
                        'store_page_enabled' in e &&
                            _.default.track(
                                O.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED,
                                (function (e) {
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
                                })({ enabled: v }, (0, x.hH)(s.id))
                            ));
            },
            U = O.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(L),
            B = null != Z && Z === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: F } = (0, j.gX)(s.id),
            z = F || !A;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(p.vwX, {
                    tag: 'h1',
                    children: y.NW.string(y.t.N6Tg9P)
                }),
                (0, r.jsx)(p.R94, {
                    type: p.R94.Types.DESCRIPTION,
                    children: y.NW.string(y.t['uU/69/'])
                }),
                (0, r.jsx)(p.j7V, {
                    className: I.enableSwitch,
                    value: v,
                    disabled: F || (!v && !l),
                    tooltipNote: v || l ? void 0 : y.NW.string(y.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => P(e),
                    children: (0, r.jsx)(p.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: y.NW.string(y.t.lwvl1t)
                    })
                }),
                (0, r.jsxs)(p.xJW, {
                    title: y.NW.string(y.t.N46WOj),
                    disabled: F,
                    children: [
                        (0, r.jsx)(h.Z, {
                            value: U,
                            className: a()({ [I.disabled]: F })
                        }),
                        (0, r.jsx)(p.zxk, {
                            onClick: () => (0, b.Z)(U),
                            className: I.openPageButton,
                            disabled: F,
                            children: y.NW.string(y.t.CaOYqa)
                        })
                    ]
                }),
                (0, r.jsx)(p.$i$, { className: I.divider }),
                (0, r.jsxs)(p.xJW, {
                    title: y.NW.string(y.t.W39uIC),
                    disabled: F,
                    children: [
                        (0, r.jsx)(p.R94, {
                            disabled: F,
                            children: y.NW.string(y.t.B6XtEx)
                        }),
                        (0, r.jsxs)('div', {
                            className: I.accentColorContainer,
                            children: [
                                (0, r.jsx)(p.zxk, {
                                    onClick: () => null,
                                    color: p.zxk.Colors.CUSTOM,
                                    style: { backgroundColor: '#'.concat(w.toString(16).padStart(6, '0')) },
                                    className: I.buttonPreview,
                                    disabled: F,
                                    children: y.NW.string(y.t.l6iM39)
                                }),
                                (0, r.jsx)(p.zH8, {
                                    colors: E,
                                    customColor: null,
                                    defaultColor: T,
                                    value: w,
                                    onChange: (e) => R(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: I.hideColorButtons,
                                    disabled: F
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(p.$i$, { className: I.divider }),
                (0, r.jsxs)(p.xJW, {
                    title: y.NW.string(y.t.k2yRvb),
                    disabled: F,
                    children: [
                        (0, r.jsx)(p.R94, {
                            disabled: F,
                            children: y.NW.string(y.t['amd99/'])
                        }),
                        (0, r.jsx)(p.oil, {
                            value: null != Z ? Z : void 0,
                            onChange: (e) => D('' === e ? null : e),
                            error: A ? null : y.NW.string(y.t['1kL79f']),
                            placeholder: y.NW.string(y.t['+I4gdX']),
                            className: I.trailerInputWrapper,
                            inputClassName: a()(I.trailerInput, {
                                [I.error]: !A,
                                [I.trailerInputWithCheckmark]: B || !A
                            }),
                            prefixElement:
                                A &&
                                B &&
                                (0, r.jsx)(p.owK, {
                                    size: 'md',
                                    color: m.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: m.Z.unsafe_rawColors.WHITE_500.css,
                                    className: I.inputCheckmark
                                }),
                            disabled: F
                        })
                    ]
                }),
                (0, r.jsx)(p.$i$, { className: I.divider }),
                (0, r.jsxs)(p.xJW, {
                    title: y.NW.string(y.t.AU2HU1),
                    disabled: F,
                    children: [
                        (0, r.jsx)(p.R94, {
                            disabled: F,
                            children: y.NW.string(y.t.iWBt3d)
                        }),
                        (0, r.jsx)(p.j7V, {
                            className: I.premiumMemberCountSwitchContainer,
                            value: k,
                            hideBorder: !0,
                            onChange: (e) => W(e),
                            disabled: F,
                            children: (0, r.jsxs)('div', {
                                className: I.iconSwitchLabel,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: I.iconContainer,
                                        children: (0, r.jsx)(p.tBG, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 28,
                                            height: 28,
                                            className: I.premiumMemberCountIcon
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(p.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: y.NW.string(y.t.hJsAPj)
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                children: y.NW.string(y.t.hn65ER)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g.W, {
                    component: 'div',
                    className: I.contentRegion,
                    children:
                        M &&
                        (0, r.jsx)(p.oXn, {
                            children: (0, r.jsx)(f.Z, {
                                submitting: u,
                                onReset: () => {
                                    var e, t;
                                    P(s.hasFeature(O.oNc.CREATOR_STORE_PAGE)), R(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : T), D(null == c ? void 0 : c.store_page_trailer_url), W(null != (t = null == c ? void 0 : c.store_page_show_subscriber_count) && t);
                                },
                                onSave: G,
                                disabled: z
                            })
                        })
                })
            ]
        });
    };
function w() {
    let e = (0, u.e7)([N.Z], () => N.Z.getGuild()),
        t = (0, v.f)(),
        n = (0, C.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, r.jsx)(P, {
              guild: e,
              canEnable: n
          })
        : (0, r.jsx)(p.$jN, {});
}
function R() {
    let e = (0, u.e7)([N.Z], () => N.Z.getGuild());
    return (0, r.jsx)(v.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(w, {})
    });
}
