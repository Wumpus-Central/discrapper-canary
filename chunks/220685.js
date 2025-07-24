(n.d(t, { Z: () => w }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(215569),
    m = n(755721),
    g = n(481060),
    p = n(484614),
    f = n(852860),
    h = n(782568),
    x = n(367907),
    b = n(674180),
    j = n(999382),
    v = n(626135),
    _ = n(730647),
    O = n(584825),
    C = n(981631),
    y = n(388032),
    N = n(111558);
let I = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    E = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    S = I[4],
    T = (e) => {
        var t, n;
        let { guild: l, canEnable: a } = e,
            c = (0, O.YB)(l.id),
            { loading: j, updateSubscriptionsSettings: _ } = (0, O.QV)(),
            [T, P] = i.useState(l.features.has(C.oNc.CREATOR_STORE_PAGE)),
            [w, R] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : S),
            [Z, D] = i.useState(null == c ? void 0 : c.store_page_trailer_url),
            A = null == Z || null != Z.match(E),
            [L, k] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n),
            M = i.useRef(null == c ? void 0 : c.store_page_slug).current,
            G = T !== l.features.has(C.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && w !== S) || ((null == c ? void 0 : c.store_page_primary_color) != null && w !== (null == c ? void 0 : c.store_page_primary_color)) || Z !== (null == c ? void 0 : c.store_page_trailer_url) || (null != L && L !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            U = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                (T !== l.features.has(C.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = T),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && w !== S) || ((null == c ? void 0 : c.store_page_primary_color) != null && w !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = w),
                    Z !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = Z),
                    L !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = L),
                    Object.keys(e).length > 0 &&
                        (await _(l.id, e),
                        'store_page_enabled' in e &&
                            v.default.track(
                                C.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({ enabled: T }, (0, x.hH)(l.id))
                            )));
            },
            B = C.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(M),
            F = null != Z && Z === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: H } = (0, b.gX)(l.id),
            z = H || !A;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(g.vwX, {
                    tag: 'h1',
                    children: y.intl.string(y.t.N6Tg9P)
                }),
                (0, r.jsx)(g.R94, {
                    type: g.R94.Types.DESCRIPTION,
                    children: y.intl.string(y.t['uU/69/'])
                }),
                (0, r.jsx)(g.j7V, {
                    className: N.enableSwitch,
                    value: T,
                    disabled: H || (!T && !a),
                    tooltipNote: T || a ? void 0 : y.intl.string(y.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => P(e),
                    children: (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: y.intl.string(y.t.lwvl1t)
                    })
                }),
                (0, r.jsxs)(g.xJW, {
                    title: y.intl.string(y.t.N46WOj),
                    disabled: H,
                    children: [
                        (0, r.jsx)(p.Z, {
                            value: B,
                            className: s()({ [N.disabled]: H })
                        }),
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: N.openPageButton,
                            children: (0, r.jsx)(g.zxk, {
                                variant: 'primary',
                                text: y.intl.string(y.t.CaOYqa),
                                onClick: () => (0, h.Z)(B),
                                disabled: H
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g.$i$, { className: N.divider }),
                (0, r.jsxs)(g.xJW, {
                    title: y.intl.string(y.t.W39uIC),
                    disabled: H,
                    children: [
                        (0, r.jsx)(g.R94, {
                            disabled: H,
                            children: y.intl.string(y.t.B6XtEx)
                        }),
                        (0, r.jsxs)('div', {
                            className: N.accentColorContainer,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-md/medium',
                                    style: { backgroundColor: '#'.concat(w.toString(16).padStart(6, '0')) },
                                    className: N.buttonPreview,
                                    children: y.intl.string(y.t.l6iM39)
                                }),
                                (0, r.jsx)(g.zH8, {
                                    colors: I,
                                    customColor: null,
                                    defaultColor: S,
                                    value: w,
                                    onChange: (e) => R(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: N.hideColorButtons,
                                    disabled: H
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(g.$i$, { className: N.divider }),
                (0, r.jsxs)(g.xJW, {
                    title: y.intl.string(y.t.k2yRvb),
                    disabled: H,
                    children: [
                        (0, r.jsx)(g.R94, {
                            disabled: H,
                            children: y.intl.string(y.t['amd99/'])
                        }),
                        (0, r.jsx)(m.Is, {
                            value: null != Z ? Z : void 0,
                            onChange: (e) => D('' === e ? null : e),
                            error: A ? null : y.intl.string(y.t['1kL79f']),
                            placeholder: y.intl.string(y.t['+I4gdX']),
                            className: N.trailerInputWrapper,
                            inputClassName: s()(N.trailerInput, {
                                [N.error]: !A,
                                [N.trailerInputWithCheckmark]: F || !A
                            }),
                            prefixElement:
                                A &&
                                F &&
                                (0, r.jsx)(g.owK, {
                                    size: 'md',
                                    color: d.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css,
                                    className: N.inputCheckmark
                                }),
                            disabled: H
                        })
                    ]
                }),
                (0, r.jsx)(g.$i$, { className: N.divider }),
                (0, r.jsxs)(g.xJW, {
                    title: y.intl.string(y.t.AU2HU1),
                    disabled: H,
                    children: [
                        (0, r.jsx)(g.R94, {
                            disabled: H,
                            children: y.intl.string(y.t.iWBt3d)
                        }),
                        (0, r.jsx)(g.j7V, {
                            className: N.premiumMemberCountSwitchContainer,
                            value: L,
                            hideBorder: !0,
                            onChange: (e) => k(e),
                            disabled: H,
                            children: (0, r.jsxs)('div', {
                                className: N.iconSwitchLabel,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: N.iconContainer,
                                        children: (0, r.jsx)(g.tBG, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 28,
                                            height: 28,
                                            className: N.premiumMemberCountIcon
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(g.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: y.intl.string(y.t.hJsAPj)
                                            }),
                                            (0, r.jsx)(g.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                children: y.intl.string(y.t.hn65ER)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(u.W, {
                    component: 'div',
                    className: N.contentRegion,
                    children:
                        G &&
                        (0, r.jsx)(g.oXn, {
                            children: (0, r.jsx)(f.Z, {
                                submitting: j,
                                onReset: () => {
                                    var e, t;
                                    (P(l.features.has(C.oNc.CREATOR_STORE_PAGE)), R(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : S), D(null == c ? void 0 : c.store_page_trailer_url), k(null != (t = null == c ? void 0 : c.store_page_show_subscriber_count) && t));
                                },
                                onSave: U,
                                disabled: z
                            })
                        })
                })
            ]
        });
    };
function P() {
    let e = (0, c.e7)([j.Z], () => j.Z.getGuild()),
        t = (0, _.f)(),
        n = (0, O.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, r.jsx)(T, {
              guild: e,
              canEnable: n
          })
        : (0, r.jsx)(g.$jN, {});
}
function w() {
    let e = (0, c.e7)([j.Z], () => j.Z.getGuild());
    return (0, r.jsx)(_.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(P, {})
    });
}
