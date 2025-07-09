(n.d(t, { Z: () => Z }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    g = n(215569),
    p = n(755721),
    f = n(481060),
    h = n(484614),
    x = n(852860),
    b = n(782568),
    j = n(367907),
    _ = n(674180),
    v = n(999382),
    O = n(626135),
    C = n(730647),
    y = n(584825),
    N = n(981631),
    I = n(388032),
    E = n(111558);
let S = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    T = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    P = S[4],
    w = (e) => {
        var t, n;
        let { guild: l, canEnable: a } = e,
            c = (0, y.YB)(l.id),
            { loading: u, updateSubscriptionsSettings: v } = (0, y.QV)(),
            [C, w] = i.useState(l.features.has(N.oNc.CREATOR_STORE_PAGE)),
            [R, Z] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : P),
            [D, A] = i.useState(null == c ? void 0 : c.store_page_trailer_url),
            L = null == D || null != D.match(T),
            [k, M] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n),
            G = i.useRef(null == c ? void 0 : c.store_page_slug).current,
            U = C !== l.features.has(N.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && R !== P) || ((null == c ? void 0 : c.store_page_primary_color) != null && R !== (null == c ? void 0 : c.store_page_primary_color)) || D !== (null == c ? void 0 : c.store_page_trailer_url) || (null != k && k !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            B = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                (C !== l.features.has(N.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = C),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && R !== P) || ((null == c ? void 0 : c.store_page_primary_color) != null && R !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = R),
                    D !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = D),
                    k !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = k),
                    !d().isEmpty(e) &&
                        (await v(l.id, e),
                        'store_page_enabled' in e &&
                            O.default.track(
                                N.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED,
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
                                })({ enabled: C }, (0, j.hH)(l.id))
                            )));
            },
            F = N.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(G),
            z = null != D && D === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: H } = (0, _.gX)(l.id),
            V = H || !L;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(f.vwX, {
                    tag: 'h1',
                    children: I.intl.string(I.t.N6Tg9P)
                }),
                (0, r.jsx)(f.R94, {
                    type: f.R94.Types.DESCRIPTION,
                    children: I.intl.string(I.t['uU/69/'])
                }),
                (0, r.jsx)(f.j7V, {
                    className: E.enableSwitch,
                    value: C,
                    disabled: H || (!C && !a),
                    tooltipNote: C || a ? void 0 : I.intl.string(I.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => w(e),
                    children: (0, r.jsx)(f.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.intl.string(I.t.lwvl1t)
                    })
                }),
                (0, r.jsxs)(f.xJW, {
                    title: I.intl.string(I.t.N46WOj),
                    disabled: H,
                    children: [
                        (0, r.jsx)(h.Z, {
                            value: F,
                            className: s()({ [E.disabled]: H })
                        }),
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: E.openPageButton,
                            children: (0, r.jsx)(f.zxk, {
                                variant: 'primary',
                                text: I.intl.string(I.t.CaOYqa),
                                onClick: () => (0, b.Z)(F),
                                disabled: H
                            })
                        })
                    ]
                }),
                (0, r.jsx)(f.$i$, { className: E.divider }),
                (0, r.jsxs)(f.xJW, {
                    title: I.intl.string(I.t.W39uIC),
                    disabled: H,
                    children: [
                        (0, r.jsx)(f.R94, {
                            disabled: H,
                            children: I.intl.string(I.t.B6XtEx)
                        }),
                        (0, r.jsxs)('div', {
                            className: E.accentColorContainer,
                            children: [
                                (0, r.jsx)(p.zx, {
                                    onClick: () => null,
                                    color: p.zx.Colors.CUSTOM,
                                    style: { backgroundColor: '#'.concat(R.toString(16).padStart(6, '0')) },
                                    className: E.buttonPreview,
                                    disabled: H,
                                    children: I.intl.string(I.t.l6iM39)
                                }),
                                (0, r.jsx)(f.zH8, {
                                    colors: S,
                                    customColor: null,
                                    defaultColor: P,
                                    value: R,
                                    onChange: (e) => Z(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: E.hideColorButtons,
                                    disabled: H
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(f.$i$, { className: E.divider }),
                (0, r.jsxs)(f.xJW, {
                    title: I.intl.string(I.t.k2yRvb),
                    disabled: H,
                    children: [
                        (0, r.jsx)(f.R94, {
                            disabled: H,
                            children: I.intl.string(I.t['amd99/'])
                        }),
                        (0, r.jsx)(f.oil, {
                            value: null != D ? D : void 0,
                            onChange: (e) => A('' === e ? null : e),
                            error: L ? null : I.intl.string(I.t['1kL79f']),
                            placeholder: I.intl.string(I.t['+I4gdX']),
                            className: E.trailerInputWrapper,
                            inputClassName: s()(E.trailerInput, {
                                [E.error]: !L,
                                [E.trailerInputWithCheckmark]: z || !L
                            }),
                            prefixElement:
                                L &&
                                z &&
                                (0, r.jsx)(f.owK, {
                                    size: 'md',
                                    color: m.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: m.Z.unsafe_rawColors.WHITE_500.css,
                                    className: E.inputCheckmark
                                }),
                            disabled: H
                        })
                    ]
                }),
                (0, r.jsx)(f.$i$, { className: E.divider }),
                (0, r.jsxs)(f.xJW, {
                    title: I.intl.string(I.t.AU2HU1),
                    disabled: H,
                    children: [
                        (0, r.jsx)(f.R94, {
                            disabled: H,
                            children: I.intl.string(I.t.iWBt3d)
                        }),
                        (0, r.jsx)(f.j7V, {
                            className: E.premiumMemberCountSwitchContainer,
                            value: k,
                            hideBorder: !0,
                            onChange: (e) => M(e),
                            disabled: H,
                            children: (0, r.jsxs)('div', {
                                className: E.iconSwitchLabel,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.iconContainer,
                                        children: (0, r.jsx)(f.tBG, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 28,
                                            height: 28,
                                            className: E.premiumMemberCountIcon
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(f.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: I.intl.string(I.t.hJsAPj)
                                            }),
                                            (0, r.jsx)(f.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                children: I.intl.string(I.t.hn65ER)
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
                    className: E.contentRegion,
                    children:
                        U &&
                        (0, r.jsx)(f.oXn, {
                            children: (0, r.jsx)(x.Z, {
                                submitting: u,
                                onReset: () => {
                                    var e, t;
                                    (w(l.features.has(N.oNc.CREATOR_STORE_PAGE)), Z(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : P), A(null == c ? void 0 : c.store_page_trailer_url), M(null != (t = null == c ? void 0 : c.store_page_show_subscriber_count) && t));
                                },
                                onSave: B,
                                disabled: V
                            })
                        })
                })
            ]
        });
    };
function R() {
    let e = (0, u.e7)([v.Z], () => v.Z.getGuild()),
        t = (0, C.f)(),
        n = (0, y.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, r.jsx)(w, {
              guild: e,
              canEnable: n
          })
        : (0, r.jsx)(f.$jN, {});
}
function Z() {
    let e = (0, u.e7)([v.Z], () => v.Z.getGuild());
    return (0, r.jsx)(C.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(R, {})
    });
}
