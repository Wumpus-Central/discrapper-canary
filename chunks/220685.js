n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(215569),
    g = n(481060),
    x = n(484614),
    p = n(852860),
    f = n(782568),
    C = n(367907),
    v = n(674180),
    _ = n(999382),
    I = n(626135),
    N = n(730647),
    T = n(584825),
    j = n(981631),
    b = n(388032),
    S = n(897668);
let E = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    R = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    y = E[4],
    A = (e) => {
        var t, n;
        let { guild: l, canEnable: s } = e,
            c = (0, T.YB)(l.id),
            { loading: u, updateSubscriptionsSettings: _ } = (0, T.QV)(),
            [N, A] = r.useState(l.hasFeature(j.oNc.CREATOR_STORE_PAGE)),
            [Z, L] = r.useState(null !== (t = null == c ? void 0 : c.store_page_primary_color) && void 0 !== t ? t : y),
            [D, O] = r.useState(null == c ? void 0 : c.store_page_trailer_url),
            P = null == D || null != D.match(R),
            [k, M] = r.useState(null !== (n = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== n && n),
            w = r.useRef(null == c ? void 0 : c.store_page_slug).current,
            B = N !== l.hasFeature(j.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && Z !== y) || ((null == c ? void 0 : c.store_page_primary_color) != null && Z !== (null == c ? void 0 : c.store_page_primary_color)) || D !== (null == c ? void 0 : c.store_page_trailer_url) || (null != k && k !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            U = async () => {
                o()(null != c, 'Settings must be defined');
                let e = {};
                N !== l.hasFeature(j.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = N),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && Z !== y) || ((null == c ? void 0 : c.store_page_primary_color) != null && Z !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = Z),
                    D !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = D),
                    k !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = k),
                    !d().isEmpty(e) &&
                        (await _(l.id, e),
                        'store_page_enabled' in e &&
                            I.default.track(j.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
                                enabled: N,
                                ...(0, C.hH)(l.id)
                            }));
            },
            G = j.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(w),
            F = null != D && D === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: H } = (0, v.gX)(l.id),
            z = H || !P;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(g.FormTitle, {
                    tag: 'h1',
                    children: b.intl.string(b.t.N6Tg9P)
                }),
                (0, i.jsx)(g.FormText, {
                    type: g.FormText.Types.DESCRIPTION,
                    children: b.intl.string(b.t['uU/69/'])
                }),
                (0, i.jsx)(g.FormSwitch, {
                    className: S.enableSwitch,
                    value: N,
                    disabled: H || (!N && !s),
                    tooltipNote: N || s ? void 0 : b.intl.string(b.t.mIgfEh),
                    hideBorder: !0,
                    onChange: (e) => A(e),
                    children: (0, i.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: b.intl.string(b.t.lwvl1t)
                    })
                }),
                (0, i.jsxs)(g.FormItem, {
                    title: b.intl.string(b.t.N46WOj),
                    disabled: H,
                    children: [
                        (0, i.jsx)(x.Z, {
                            value: G,
                            className: a()({ [S.disabled]: H })
                        }),
                        (0, i.jsx)(g.Button, {
                            onClick: () => (0, f.Z)(G),
                            className: S.openPageButton,
                            disabled: H,
                            children: b.intl.string(b.t.CaOYqa)
                        })
                    ]
                }),
                (0, i.jsx)(g.FormDivider, { className: S.divider }),
                (0, i.jsxs)(g.FormItem, {
                    title: b.intl.string(b.t.W39uIC),
                    disabled: H,
                    children: [
                        (0, i.jsx)(g.FormText, {
                            disabled: H,
                            children: b.intl.string(b.t.B6XtEx)
                        }),
                        (0, i.jsxs)('div', {
                            className: S.accentColorContainer,
                            children: [
                                (0, i.jsx)(g.Button, {
                                    onClick: () => null,
                                    color: g.Button.Colors.CUSTOM,
                                    style: { backgroundColor: '#'.concat(Z.toString(16).padStart(6, '0')) },
                                    className: S.buttonPreview,
                                    disabled: H,
                                    children: b.intl.string(b.t.l6iM39)
                                }),
                                (0, i.jsx)(g.ColorPicker, {
                                    colors: E,
                                    customColor: null,
                                    defaultColor: y,
                                    value: Z,
                                    onChange: (e) => L(e),
                                    renderDefaultButton: () => null,
                                    renderCustomButton: () => null,
                                    colorContainerClassName: S.hideColorButtons,
                                    disabled: H
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(g.FormDivider, { className: S.divider }),
                (0, i.jsxs)(g.FormItem, {
                    title: b.intl.string(b.t.k2yRvb),
                    disabled: H,
                    children: [
                        (0, i.jsx)(g.FormText, {
                            disabled: H,
                            children: b.intl.string(b.t['amd99/'])
                        }),
                        (0, i.jsx)(g.TextInput, {
                            value: null != D ? D : void 0,
                            onChange: (e) => O('' === e ? null : e),
                            error: P ? null : b.intl.string(b.t['1kL79f']),
                            placeholder: b.intl.string(b.t['+I4gdX']),
                            className: S.trailerInputWrapper,
                            inputClassName: a()(S.trailerInput, {
                                [S.error]: !P,
                                [S.trailerInputWithCheckmark]: F || !P
                            }),
                            prefixElement:
                                P &&
                                F &&
                                (0, i.jsx)(g.CircleCheckIcon, {
                                    size: 'md',
                                    color: m.Z.unsafe_rawColors.BRAND_500.css,
                                    secondaryColor: m.Z.unsafe_rawColors.WHITE_500.css,
                                    className: S.inputCheckmark
                                }),
                            disabled: H
                        })
                    ]
                }),
                (0, i.jsx)(g.FormDivider, { className: S.divider }),
                (0, i.jsxs)(g.FormItem, {
                    title: b.intl.string(b.t.AU2HU1),
                    disabled: H,
                    children: [
                        (0, i.jsx)(g.FormText, {
                            disabled: H,
                            children: b.intl.string(b.t.iWBt3d)
                        }),
                        (0, i.jsx)(g.FormSwitch, {
                            className: S.premiumMemberCountSwitchContainer,
                            value: k,
                            hideBorder: !0,
                            onChange: (e) => M(e),
                            disabled: H,
                            children: (0, i.jsxs)('div', {
                                className: S.iconSwitchLabel,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: S.iconContainer,
                                        children: (0, i.jsx)(g.UserIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 28,
                                            height: 28,
                                            className: S.premiumMemberCountIcon
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
                    className: S.contentRegion,
                    children:
                        B &&
                        (0, i.jsx)(g.SlideIn, {
                            children: (0, i.jsx)(p.Z, {
                                submitting: u,
                                onReset: () => {
                                    var e, t;
                                    A(l.hasFeature(j.oNc.CREATOR_STORE_PAGE)), L(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : y), O(null == c ? void 0 : c.store_page_trailer_url), M(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t);
                                },
                                onSave: U,
                                disabled: z
                            })
                        })
                })
            ]
        });
    };
function Z() {
    let e = (0, u.e7)([_.Z], () => _.Z.getGuild()),
        t = (0, N.f)(),
        n = (0, T.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, i.jsx)(A, {
              guild: e,
              canEnable: n
          })
        : (0, i.jsx)(g.Spinner, {});
}
function L() {
    let e = (0, u.e7)([_.Z], () => _.Z.getGuild());
    return (0, i.jsx)(N.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, i.jsx)(Z, {})
    });
}
