n.d(t, { Z: () => T }), n(388685), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(215569),
    u = n(796027),
    g = n(481060),
    m = n(484614),
    p = n(782568),
    f = n(367907),
    h = n(674180),
    b = n(999382),
    x = n(626135),
    j = n(730647),
    _ = n(584825),
    v = n(981631),
    O = n(388032),
    C = n(737543);
let y = [
        14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000,
        12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236,
    ],
    N =
        /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    E = y[4],
    I = (e) => {
        var t, n;
        let { guild: l, canEnable: s } = e,
            c = (0, _.YB)(l.id),
            { loading: b, updateSubscriptionsSettings: j } = (0, _.QV)(),
            [I, S] = i.useState(l.features.has(v.GuildFeatures.CREATOR_STORE_PAGE)),
            [T, P] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : E),
            [w, Z] = i.useState(null == c ? void 0 : c.store_page_trailer_url),
            R = null == w || null != w.match(N),
            [D, A] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n),
            L = i.useRef(null == c ? void 0 : c.store_page_slug).current,
            k =
                I !== l.features.has(v.GuildFeatures.CREATOR_STORE_PAGE) ||
                ((null == c ? void 0 : c.store_page_primary_color) == null && T !== E) ||
                ((null == c ? void 0 : c.store_page_primary_color) != null &&
                    T !== (null == c ? void 0 : c.store_page_primary_color)) ||
                w !== (null == c ? void 0 : c.store_page_trailer_url) ||
                (null != D && D !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
            G = async () => {
                o()(null != c, "Settings must be defined");
                let e = {};
                I !== l.features.has(v.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = I),
                    (((null == c ? void 0 : c.store_page_primary_color) == null && T !== E) ||
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
                                v.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED,
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
                                })({ enabled: I }, (0, f.hH)(l.id)),
                            ));
            },
            M = v.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(L),
            U = null != w && w === (null == c ? void 0 : c.store_page_trailer_url),
            { shouldRestrictUpdatingCreatorMonetizationSettings: B } = (0, h.gX)(l.id),
            F = B || !R,
            H = !I && !s;
        return (0, r.jsxs)(g.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(g.Heading, {
                    variant: "heading-lg/semibold",
                    children: O.intl.string(O.t.N6Tg9A),
                }),
                (0, r.jsxs)(g.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.rsf, {
                            label: O.intl.string(O.t.lwvl1g),
                            checked: I,
                            disabled: B || H,
                            description: O.intl.string(O.t["uU/69/"]),
                            onChange: (e) => S(e),
                        }),
                        H
                            ? (0, r.jsx)(g.Wn, {
                                  messageType: g.QYI.WARNING,
                                  children: O.intl.string(O.t.mIgfEu),
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsxs)(g.gNt, {
                    label: O.intl.string(O.t.N46WOv),
                    disabled: B,
                    children: [
                        (0, r.jsx)(m.Z, {
                            value: M,
                            className: a()({ [C.disabled]: B }),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: C.openPageButton,
                            children: (0, r.jsx)(g.Button, {
                                variant: "primary",
                                text: O.intl.string(O.t.CaOYqc),
                                onClick: () => (0, p.Z)(M),
                                disabled: B,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.gNt, {
                    label: O.intl.string(O.t.W39uIL),
                    description: O.intl.string(O.t.B6XtE7),
                    children: (0, r.jsxs)("div", {
                        className: C.accentColorContainer,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: "text-md/medium",
                                style: { backgroundColor: "#".concat(T.toString(16).padStart(6, "0")) },
                                className: C.buttonPreview,
                                children: O.intl.string(O.t.l6iM36),
                            }),
                            (0, r.jsx)(g.zH8, {
                                colors: y,
                                customColor: null,
                                defaultColor: E,
                                value: T,
                                onChange: (e) => P(e),
                                renderDefaultButton: () => null,
                                renderCustomButton: () => null,
                                colorContainerClassName: C.hideColorButtons,
                                disabled: B,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.oil, {
                    label: O.intl.string(O.t.k2yRvd),
                    description: O.intl.string(O.t.amd996),
                    value: null != w ? w : void 0,
                    onChange: (e) => Z("" === e ? null : e),
                    error: R ? null : O.intl.string(O.t["1kL79Q"]),
                    placeholder: O.intl.string(O.t["+I4gdT"]),
                    trailing: R && U ? g.owK : void 0,
                    disabled: B,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.C3N, {
                    label: O.intl.string(O.t.AU2HU0),
                    description: O.intl.string(O.t.iWBt3Q),
                    children: (0, r.jsx)(g.rsf, {
                        label: O.intl.string(O.t.hJsAPo),
                        description: O.intl.string(O.t.hn65ET),
                        icon: g.tBG,
                        checked: D,
                        onChange: (e) => A(e),
                        disabled: B,
                    }),
                }),
                (0, r.jsx)(d.W, {
                    component: "div",
                    className: C.contentRegion,
                    children:
                        k &&
                        (0, r.jsx)(g.oXn, {
                            children: (0, r.jsx)(u.Z, {
                                submitting: b,
                                onReset: () => {
                                    var e, t;
                                    S(l.features.has(v.GuildFeatures.CREATOR_STORE_PAGE)),
                                        P(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : E),
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
function S() {
    let e = (0, c.e7)([b.Z], () => b.Z.getGuild()),
        t = (0, j.f)(),
        n = (0, _.qi)(null == e ? void 0 : e.id).some((e) => e.published);
    return null != e && t
        ? (0, r.jsx)(I, {
              guild: e,
              canEnable: n,
          })
        : (0, r.jsx)(g.$jN, {});
}
function T() {
    let e = (0, c.e7)([b.Z], () => b.Z.getGuild());
    return (0, r.jsx)(j.l, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(S, {}),
    });
}
