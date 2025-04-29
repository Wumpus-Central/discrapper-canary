n.d(t, { Z: () => R }), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    m = n(692547),
    g = n(215569),
    p = n(481060),
    h = n(484614),
    f = n(852860),
    x = n(782568),
    b = n(367907),
    j = n(674180),
    _ = n(999382),
    v = n(626135),
    O = n(730647),
    C = n(584825),
    y = n(981631),
    N = n(388032),
    I = n(111558);
let E = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    S = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    T = E[4],
    P = (e) => {
        var t, n;
        let { guild: l, canEnable: a } = e,
            c = (0, C.YB)(l.id),
            { loading: d, updateSubscriptionsSettings: _ } = (0, C.QV)(),
            [O, P] = i.useState(l.hasFeature(y.oNc.CREATOR_STORE_PAGE)),
            [w, R] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : T),
            [Z, D] = i.useState(null == c ? void 0 : c.store_page_trailer_url),
            k = null == Z || null != Z.match(S),
            [A, L] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n),
            M = i.useRef(null == c ? void 0 : c.store_page_slug).current,
            G = O !== l.hasFeature(y.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && w !== T) || ((null == c ? void 0 : c.store_page_primary_color) != null && w !== (null == c ? void 0 : c.store_page_primary_color)) || Z !== (null == c ? void 0 : c.store_page_trailer_url) || (null != A && A !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            U = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                O !== l.hasFeature(y.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = O),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && w !== T) || ((null == c ? void 0 : c.store_page_primary_color) != null && w !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = w),
                    Z !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = Z),
                    A !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = A),
                    !u().isEmpty(e) &&
                        (await _(l.id, e),
                        'store_page_enabled' in e &&
                            v.default.track(
                                y.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED,
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
                                })({ enabled: O }, (0, b.hH)(l.id))
                            ));
            },
            B = y.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(M),
            F = null != Z && Z === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: z } = (0, j.gX)(l.id),
            H = z || !k;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(p.vwX, {
                    tag: 'h1',
                    children: N.intl.string(N.t.N6Tg9P)
                }),
                (0, r.jsx)(p.R94, {
                    type: p.R94.Types.DESCRIPTION,
                    children: N.intl.string(N.t['uU/69/'])
                }),
                (0, r.jsx)(p.j7V, {
                    className: I.enableSwitch,
                    value: O,
                    disabled: z || (!O && !a),
                    tooltipNote: O || a ? void 0 : N.intl.string(N.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => P(e),
                    children: (0, r.jsx)(p.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: N.intl.string(N.t.lwvl1t)
                    })
                }),
                (0, r.jsxs)(p.xJW, {
                    title: N.intl.string(N.t.N46WOj),
                    disabled: z,
                    children: [
                        (0, r.jsx)(h.Z, {
                            value: B,
                            className: s()({ [I.disabled]: z })
                        }),
                        (0, r.jsx)(p.zxk, {
                            onClick: () => (0, x.Z)(B),
                            className: I.openPageButton,
                            disabled: z,
                            children: N.intl.string(N.t.CaOYqa)
                        })
                    ]
                }),
                (0, r.jsx)(p.$i$, { className: I.divider }),
                (0, r.jsxs)(p.xJW, {
                    title: N.intl.string(N.t.W39uIC),
                    disabled: z,
                    children: [
                        (0, r.jsx)(p.R94, {
                            disabled: z,
                            children: N.intl.string(N.t.B6XtEx)
                        }),
                        (0, r.jsxs)('div', {
                            className: I.accentColorContainer,
                            children: [
                                (0, r.jsx)(p.zxk, {
                                    onClick: () => null,
                                    color: p.zxk.Colors.CUSTOM,
                                    style: { backgroundColor: '#'.concat(w.toString(16).padStart(6, '0')) },
                                    className: I.buttonPreview,
                                    disabled: z,
                                    children: N.intl.string(N.t.l6iM39)
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
                                    disabled: z
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(p.$i$, { className: I.divider }),
                (0, r.jsxs)(p.xJW, {
                    title: N.intl.string(N.t.k2yRvb),
                    disabled: z,
                    children: [
                        (0, r.jsx)(p.R94, {
                            disabled: z,
                            children: N.intl.string(N.t['amd99/'])
                        }),
                        (0, r.jsx)(p.oil, {
                            value: null != Z ? Z : void 0,
                            onChange: (e) => D('' === e ? null : e),
                            error: k ? null : N.intl.string(N.t['1kL79f']),
                            placeholder: N.intl.string(N.t['+I4gdX']),
                            className: I.trailerInputWrapper,
                            inputClassName: s()(I.trailerInput, {
                                [I.error]: !k,
                                [I.trailerInputWithCheckmark]: F || !k
                            }),
                            prefixElement:
                                k &&
                                F &&
                                (0, r.jsx)(p.owK, {
                                    size: 'md',
                                    color: m.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: m.Z.unsafe_rawColors.WHITE_500.css,
                                    className: I.inputCheckmark
                                }),
                            disabled: z
                        })
                    ]
                }),
                (0, r.jsx)(p.$i$, { className: I.divider }),
                (0, r.jsxs)(p.xJW, {
                    title: N.intl.string(N.t.AU2HU1),
                    disabled: z,
                    children: [
                        (0, r.jsx)(p.R94, {
                            disabled: z,
                            children: N.intl.string(N.t.iWBt3d)
                        }),
                        (0, r.jsx)(p.j7V, {
                            className: I.premiumMemberCountSwitchContainer,
                            value: A,
                            hideBorder: !0,
                            onChange: (e) => L(e),
                            disabled: z,
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
                                                children: N.intl.string(N.t.hJsAPj)
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                children: N.intl.string(N.t.hn65ER)
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
                        G &&
                        (0, r.jsx)(p.oXn, {
                            children: (0, r.jsx)(f.Z, {
                                submitting: d,
                                onReset: () => {
                                    var e, t;
                                    P(l.hasFeature(y.oNc.CREATOR_STORE_PAGE)), R(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : T), D(null == c ? void 0 : c.store_page_trailer_url), L(null != (t = null == c ? void 0 : c.store_page_show_subscriber_count) && t);
                                },
                                onSave: U,
                                disabled: H
                            })
                        })
                })
            ]
        });
    };
function w() {
    let e = (0, d.e7)([_.Z], () => _.Z.getGuild()),
        t = (0, O.f)(),
        n = (0, C.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, r.jsx)(P, {
              guild: e,
              canEnable: n
          })
        : (0, r.jsx)(p.$jN, {});
}
function R() {
    let e = (0, d.e7)([_.Z], () => _.Z.getGuild());
    return (0, r.jsx)(O.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(w, {})
    });
}
