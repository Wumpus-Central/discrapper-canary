n.d(t, { Z: () => T }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(215569),
    u = n(796027),
    g = n(481060),
    f = n(484614),
    m = n(782568),
    b = n(367907),
    p = n(674180),
    h = n(999382),
    x = n(626135),
    j = n(730647),
    v = n(584825),
    O = n(981631),
    C = n(388032),
    y = n(615949);
let N = [
        14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000,
        12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236,
    ],
    E =
        /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    I = N[4],
    S = (e) => {
        var t, n;
        let { guild: l, canEnable: s } = e,
            c = (0, v.YB)(l.id),
            { loading: h, updateSubscriptionsSettings: j } = (0, v.QV)(),
            [S, _] = i.useState(l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE)),
            [T, P] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : I),
            [w, Z] = i.useState(null == c ? void 0 : c.store_page_trailer_url),
            R = null == w || null != w.match(E),
            [D, A] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n),
            L = i.useRef(null == c ? void 0 : c.store_page_slug).current,
            k =
                S !== l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE) ||
                ((null == c ? void 0 : c.store_page_primary_color) == null && T !== I) ||
                ((null == c ? void 0 : c.store_page_primary_color) != null &&
                    T !== (null == c ? void 0 : c.store_page_primary_color)) ||
                w !== (null == c ? void 0 : c.store_page_trailer_url) ||
                (null != D && D !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            G = async () => {
                o()(null != c, "Settings must be defined");
                let e = {};
                S !== l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = S),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && T !== I) ||
                        ((null == c ? void 0 : c.store_page_primary_color) != null &&
                            T !== (null == c ? void 0 : c.store_page_primary_color))) &&
                        (e.store_page_primary_color = T),
                    w !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = w),
                    D !== (null == c ? void 0 : c.store_page_show_subscriber_count) &&
                        (e.store_page_show_subscriber_count = D),
                    Object.keys(e).length > 0 &&
                        (await j(l.id, e),
                        "store_page_enabled" in e &&
                            x.default.track(
                                O.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({ enabled: S }, (0, b.hH)(l.id)),
                            ));
            },
            M = O.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(L),
            U = null != w && w === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: B } = (0, p.gX)(l.id),
            F = B || !R,
            H = !S && !s;
        return (0, r.jsxs)(g.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(g.Heading, {
                    variant: "heading-lg/semibold",
                    children: C.intl.string(C.t.N6Tg9A),
                }),
                (0, r.jsxs)(g.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.rsf, {
                            label: C.intl.string(C.t.lwvl1g),
                            checked: S,
                            disabled: B || H,
                            description: C.intl.string(C.t["uU/69/"]),
                            onChange: (e) => _(e),
                        }),
                        H
                            ? (0, r.jsx)(g.Wn, {
                                  messageType: g.QYI.WARNING,
                                  children: C.intl.string(C.t.mIgfEu),
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsxs)(g.gNt, {
                    label: C.intl.string(C.t.N46WOv),
                    disabled: B,
                    children: [
                        (0, r.jsx)(f.Z, {
                            value: M,
                            className: a()({ [y.disabled]: B }),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: y.openPageButton,
                            children: (0, r.jsx)(g.Button, {
                                variant: "primary",
                                text: C.intl.string(C.t.CaOYqc),
                                onClick: () => (0, m.Z)(M),
                                disabled: B,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.gNt, {
                    label: C.intl.string(C.t.W39uIL),
                    description: C.intl.string(C.t.B6XtE7),
                    children: (0, r.jsxs)("div", {
                        className: y.accentColorContainer,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: "text-md/medium",
                                style: { backgroundColor: "#".concat(T.toString(16).padStart(6, "0")) },
                                className: y.buttonPreview,
                                children: C.intl.string(C.t.l6iM36),
                            }),
                            (0, r.jsx)(g.zH8, {
                                colors: N,
                                customColor: null,
                                defaultColor: I,
                                value: T,
                                onChange: (e) => P(e),
                                renderDefaultButton: () => null,
                                renderCustomButton: () => null,
                                colorContainerClassName: y.hideColorButtons,
                                disabled: B,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.oil, {
                    label: C.intl.string(C.t.k2yRvd),
                    description: C.intl.string(C.t.amd996),
                    value: null != w ? w : void 0,
                    onChange: (e) => Z("" === e ? null : e),
                    error: R ? null : C.intl.string(C.t["1kL79Q"]),
                    placeholder: C.intl.string(C.t["+I4gdT"]),
                    trailing: R && U ? g.owK : void 0,
                    disabled: B,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.C3N, {
                    label: C.intl.string(C.t.AU2HU0),
                    description: C.intl.string(C.t.iWBt3Q),
                    children: (0, r.jsx)(g.rsf, {
                        label: C.intl.string(C.t.hJsAPo),
                        description: C.intl.string(C.t.hn65ET),
                        icon: g.tBG,
                        checked: D,
                        onChange: (e) => A(e),
                        disabled: B,
                    }),
                }),
                (0, r.jsx)(d.W, {
                    component: "div",
                    className: y.contentRegion,
                    children:
                        k &&
                        (0, r.jsx)(g.oXn, {
                            children: (0, r.jsx)(u.Z, {
                                submitting: h,
                                onReset: () => {
                                    var e, t;
                                    _(l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE)),
                                        P(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : I),
                                        Z(null == c ? void 0 : c.store_page_trailer_url),
                                        A(null != (t = null == c ? void 0 : c.store_page_show_subscriber_count) && t);
                                },
                                onSave: G,
                                disabled: F,
                            }),
                        }),
                }),
            ],
        });
    };
function _() {
    let e = (0, c.e7)([h.Z], () => h.Z.getGuild()),
        t = (0, j.f)(),
        n = (0, v.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, r.jsx)(S, {
              guild: e,
              canEnable: n,
          })
        : (0, r.jsx)(g.$jN, {});
}
function T() {
    let e = (0, c.e7)([h.Z], () => h.Z.getGuild());
    return (0, r.jsx)(j.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(_, {}),
    });
}
