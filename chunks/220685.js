n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(215569),
    g = n(481060),
    x = n(484614),
    p = n(852860),
    _ = n(782568),
    C = n(367907),
    f = n(674180),
    v = n(999382),
    N = n(626135),
    j = n(730647),
    I = n(584825),
    E = n(981631),
    b = n(388032),
    T = n(2333);
let S = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    R = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    Z = S[4],
    y = (e) => {
        var t, n;
        let { guild: l, canEnable: a } = e,
            c = (0, I.YB)(l.id),
            { loading: u, updateSubscriptionsSettings: v } = (0, I.QV)(),
            [j, y] = r.useState(l.hasFeature(E.oNc.CREATOR_STORE_PAGE)),
            [A, L] = r.useState(null !== (t = null == c ? void 0 : c.store_page_primary_color) && void 0 !== t ? t : Z),
            [D, O] = r.useState(null == c ? void 0 : c.store_page_trailer_url),
            k = null == D || null != D.match(R),
            [P, w] = r.useState(null !== (n = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== n && n),
            M = r.useRef(null == c ? void 0 : c.store_page_slug).current,
            U = j !== l.hasFeature(E.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && A !== Z) || ((null == c ? void 0 : c.store_page_primary_color) != null && A !== (null == c ? void 0 : c.store_page_primary_color)) || D !== (null == c ? void 0 : c.store_page_trailer_url) || (null != P && P !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            G = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                j !== l.hasFeature(E.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = j),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && A !== Z) || ((null == c ? void 0 : c.store_page_primary_color) != null && A !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = A),
                    D !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = D),
                    P !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = P),
                    !d().isEmpty(e) &&
                        (await v(l.id, e),
                        'store_page_enabled' in e &&
                            N.default.track(E.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
                                enabled: j,
                                ...(0, C.hH)(l.id)
                            }));
            },
            B = E.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(M),
            F = null != D && D === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: z } = (0, f.gX)(l.id),
            H = z || !k;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(g.vwX, {
                    tag: 'h1',
                    children: b.intl.string(b.t.N6Tg9P)
                }),
                (0, i.jsx)(g.R94, {
                    type: g.R94.Types.DESCRIPTION,
                    children: b.intl.string(b.t['uU/69/'])
                }),
                (0, i.jsx)(g.j7V, {
                    className: T.enableSwitch,
                    value: j,
                    disabled: z || (!j && !a),
                    tooltipNote: j || a ? void 0 : b.intl.string(b.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => y(e),
                    children: (0, i.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: b.intl.string(b.t.lwvl1t)
                    })
                }),
                (0, i.jsxs)(g.xJW, {
                    title: b.intl.string(b.t.N46WOj),
                    disabled: z,
                    children: [
                        (0, i.jsx)(x.Z, {
                            value: B,
                            className: s()({ [T.disabled]: z })
                        }),
                        (0, i.jsx)(g.zxk, {
                            onClick: () => (0, _.Z)(B),
                            className: T.openPageButton,
                            disabled: z,
                            children: b.intl.string(b.t.CaOYqa)
                        })
                    ]
                }),
                (0, i.jsx)(g.$i$, { className: T.divider }),
                (0, i.jsxs)(g.xJW, {
                    title: b.intl.string(b.t.W39uIC),
                    disabled: z,
                    children: [
                        (0, i.jsx)(g.R94, {
                            disabled: z,
                            children: b.intl.string(b.t.B6XtEx)
                        }),
                        (0, i.jsxs)('div', {
                            className: T.accentColorContainer,
                            children: [
                                (0, i.jsx)(g.zxk, {
                                    onClick: () => null,
                                    color: g.zxk.Colors.CUSTOM,
                                    style: { backgroundColor: '#'.concat(A.toString(16).padStart(6, '0')) },
                                    className: T.buttonPreview,
                                    disabled: z,
                                    children: b.intl.string(b.t.l6iM39)
                                }),
                                (0, i.jsx)(g.zH8, {
                                    colors: S,
                                    customColor: null,
                                    defaultColor: Z,
                                    value: A,
                                    onChange: (e) => L(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: T.hideColorButtons,
                                    disabled: z
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(g.$i$, { className: T.divider }),
                (0, i.jsxs)(g.xJW, {
                    title: b.intl.string(b.t.k2yRvb),
                    disabled: z,
                    children: [
                        (0, i.jsx)(g.R94, {
                            disabled: z,
                            children: b.intl.string(b.t['amd99/'])
                        }),
                        (0, i.jsx)(g.oil, {
                            value: null != D ? D : void 0,
                            onChange: (e) => O('' === e ? null : e),
                            error: k ? null : b.intl.string(b.t['1kL79f']),
                            placeholder: b.intl.string(b.t['+I4gdX']),
                            className: T.trailerInputWrapper,
                            inputClassName: s()(T.trailerInput, {
                                [T.error]: !k,
                                [T.trailerInputWithCheckmark]: F || !k
                            }),
                            prefixElement:
                                k &&
                                F &&
                                (0, i.jsx)(g.owK, {
                                    size: 'md',
                                    color: m.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: m.Z.unsafe_rawColors.WHITE_500.css,
                                    className: T.inputCheckmark
                                }),
                            disabled: z
                        })
                    ]
                }),
                (0, i.jsx)(g.$i$, { className: T.divider }),
                (0, i.jsxs)(g.xJW, {
                    title: b.intl.string(b.t.AU2HU1),
                    disabled: z,
                    children: [
                        (0, i.jsx)(g.R94, {
                            disabled: z,
                            children: b.intl.string(b.t.iWBt3d)
                        }),
                        (0, i.jsx)(g.j7V, {
                            className: T.premiumMemberCountSwitchContainer,
                            value: P,
                            hideBorder: !0,
                            onChange: (e) => w(e),
                            disabled: z,
                            children: (0, i.jsxs)('div', {
                                className: T.iconSwitchLabel,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: T.iconContainer,
                                        children: (0, i.jsx)(g.tBG, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 28,
                                            height: 28,
                                            className: T.premiumMemberCountIcon
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(g.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: b.intl.string(b.t.hJsAPj)
                                            }),
                                            (0, i.jsx)(g.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                children: b.intl.string(b.t.hn65ER)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(h.W, {
                    component: 'div',
                    className: T.contentRegion,
                    children:
                        U &&
                        (0, i.jsx)(g.oXn, {
                            children: (0, i.jsx)(p.Z, {
                                submitting: u,
                                onReset: () => {
                                    var e, t;
                                    y(l.hasFeature(E.oNc.CREATOR_STORE_PAGE)), L(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : Z), O(null == c ? void 0 : c.store_page_trailer_url), w(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t);
                                },
                                onSave: G,
                                disabled: H
                            })
                        })
                })
            ]
        });
    };
function A() {
    let e = (0, u.e7)([v.Z], () => v.Z.getGuild()),
        t = (0, j.f)(),
        n = (0, I.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, i.jsx)(y, {
              guild: e,
              canEnable: n
          })
        : (0, i.jsx)(g.$jN, {});
}
function L() {
    let e = (0, u.e7)([v.Z], () => v.Z.getGuild());
    return (0, i.jsx)(j.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, i.jsx)(A, {})
    });
}
