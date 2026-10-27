(n.r(t), n.d(t, { baseRules: () => S, customRules: () => U }));
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    u = n(478676),
    o = n.n(u);
(n(323874), n(14289), n(35956), n(321073));
let i = "media.discordapp.net",
    c = /^\/attachments\/\d+\/\d+\/[^/]+$/,
    d = /\.gif$/i,
    p = /^(\d{1,5})x(\d{1,5})$/;
function g(e) {
    try {
        return new URL(e);
    } catch {
        return null;
    }
}
function m(e) {
    let t = g(e);
    return (
        null != t && "https:" === t.protocol && ("cdn.discordapp.com" === t.host || t.host === i) && c.test(t.pathname)
    );
}
function h(e, t) {
    return null == e ? [] : "text" === e.type && "string" == typeof e.content ? [{ ...e, content: t(e.content) }] : [e];
}
var f = n(707554),
    R = n(192308),
    k = n(28863),
    b = n(398590),
    y = n(693875),
    x = n(253932),
    v = n(910379);
let N = /^([a-z][a-z\d+.-]*:|\/\/)/i;
function A(e) {
    let t,
        a,
        { target: r, alt: u, title: o } = e,
        c = x.kt.useSetting(),
        [h, f] = s.useState(!1),
        [R, k] = s.useState(!1),
        b = m(r),
        A = b
            ? r
            : (function (e) {
                  if (N.test(e)) return null;
                  try {
                      return n(274516)(`./${e}`);
                  } catch {
                      return null;
                  }
              })(r);
    if (null == A || h) return null;
    let C = b
            ? (function (e) {
                  let t = null != e ? p.exec(e.trim()) : null;
                  if (null == t) return null;
                  let n = Number(t[1]),
                      l = Number(t[2]);
                  return n > 0 && l > 0 ? { width: n, height: l } : null;
              })(o)
            : null,
        j =
            null != C
                ? ((t = Math.max(0, Math.min(1, 432 / C.width, 400 / C.height))),
                  { width: Math.max(1, Math.round(C.width * t)), height: Math.max(1, Math.round(C.height * t)) })
                : null,
        w =
            b && !c && null != (a = g(A)) && d.test(a.pathname)
                ? (function (e) {
                      if (!m(e)) return null;
                      let t = new URL(e);
                      return ((t.host = i), t.searchParams.set("format", "webp"), t.toString());
                  })(A)
                : null,
        E = null != w,
        _ = E && !R;
    function I() {
        k(!0);
    }
    function M() {
        k(!1);
    }
    return (0, l.jsxs)("div", {
        className: v.inlineImage,
        children: [
            (0, l.jsx)("img", {
                className: v.inlineImageMedia,
                src: _ ? w : A,
                alt: u,
                width: j?.width,
                height: j?.height,
                loading: "lazy",
                tabIndex: E ? 0 : void 0,
                onMouseEnter: E ? I : void 0,
                onMouseLeave: E ? M : void 0,
                onFocus: E ? I : void 0,
                onBlur: E ? M : void 0,
                onError: () => f(!0),
            }),
            _ ? (0, l.jsx)(y.A, { className: v.inlineImageGifTag }) : null,
        ],
    });
}
var C = n(46054),
    j = n(551965),
    w = n(976860),
    E = n(780964),
    _ = n(766075),
    I = n(174459),
    M = n(652215),
    L = n(559868),
    O = n(736541);
let D = o().defaultRules.link,
    T = { section: M.JJy.SETTINGS_CHANGELOG };
function G(e) {
    let { level: t, children: n, className: l } = e,
        a = (0, f.$)(),
        r = parseInt(t, 10),
        u = isNaN(r) ? 1 : r;
    return s.createElement(`h${a + u - 1}`, { className: l }, n);
}
let S = (function () {
        if (null == C.A) return null;
        let { emoji: e, customEmoji: t } = C.A.createReactRules({
            enableBuildOverrides: !0,
            enableEmojiClick: !1,
            emojiFocusable: !1,
        });
        return (0, j.A)([C.A.defaultRules, { emoji: e, customEmoji: t }]);
    })(),
    U = {
        link: {
            parse(e, t, n) {
                let l,
                    s = e[2],
                    a = s.startsWith("https://discordapp.com/nitro") || s.startsWith("https://discord.com/nitro"),
                    r = s.startsWith("/activities");
                return (
                    (l = a
                        ? (e) => {
                              (I.default.track(M.HAw.PREMIUM_PROMOTION_OPENED, { location: T }),
                                  (0, _.openUserSettings)(E.X.NITRO_PANEL),
                                  n.changeLog.track(M.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, R.closeModal)(L.lb),
                                  e.preventDefault());
                          }
                        : r
                          ? (e) => {
                                ((0, w.pX)(s),
                                    n.changeLog.track(M.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...I.default.getCampaignParams(s),
                                    }),
                                    (0, b.bz)(),
                                    (0, R.closeModal)(L.lb),
                                    e.preventDefault());
                            }
                          : () => {
                                (n && "function" == typeof n.onLinkClick && n.onLinkClick(s),
                                    n.changeLog.track(M.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: s,
                                        cta_type: "inline_link",
                                        ...I.default.getCampaignParams(s),
                                    }));
                            }),
                    { ...D.parse(e, t, n), callToAction: l }
                );
            },
            react: (e, t, n) =>
                (0, l.jsx)(
                    k.Anchor,
                    {
                        href: o().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: "_blank",
                        className: e.callToAction ? "cta" : void 0,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
        lheading: (e) => ({
            react: (t, n, s) => {
                var a;
                return (0, l.jsx)(
                    G,
                    {
                        level: t.level,
                        className: r()(
                            O["heading-md/bold"],
                            ...(null == (a = t.className) ? [] : a.split(" ").map((t) => e[t])),
                        ),
                        children: n(t.content, s),
                    },
                    s.key,
                );
            },
        }),
        heading: {
            react: (e, t, n) =>
                (0, l.jsx)(G, { level: e.level, className: O["heading-md/bold"], children: t(e.content, n) }, n.key),
        },
        image: {
            react: (e, t, n) =>
                !0 !== n.changelogBlockImage
                    ? null
                    : (0, l.jsx)(A, { target: e.target, alt: e.alt, title: e.title }, n.key),
        },
        blockQuote: { react: (e, t, n) => S?.blockQuote.react(e, t, { ...n, changelogImagesDisabled: !0 }) },
        list: (e) => ({
            react(t, n, s) {
                let a = t.ordered ? "ol" : "ul",
                    u = t.items.map((t, a) =>
                        (0, l.jsx)(
                            "li",
                            {
                                className: r()(O["text-md/normal"], e.listItem),
                                children: n(t, { ...s, changelogImagesDisabled: !0 }),
                            },
                            a,
                        ),
                    );
                return (0, l.jsx)(a, { className: e.list, start: t.start, children: u }, s.key);
            },
        }),
        paragraph: (e) => ({
            react(t, n, a) {
                let u = r()(O["text-md/normal"], e.paragraph),
                    o = (function (e) {
                        let t = [],
                            n = [],
                            l = !1;
                        function s(e) {
                            let s = n;
                            if (e) {
                                let e = s[s.length - 1];
                                s = [...s.slice(0, -1), ...h(e, (e) => e.trimEnd())];
                            }
                            (l && (s = [...h(s[0], (e) => e.trimStart()), ...s.slice(1)]),
                                s.some(
                                    (e) =>
                                        "br" !== e.type &&
                                        "newline" !== e.type &&
                                        ("text" !== e.type || "string" != typeof e.content || "" !== e.content.trim()),
                                ) && t.push({ type: "text", nodes: s }),
                                (n = []));
                        }
                        return (
                            e.forEach((e) => {
                                "image" === e.type ? (s(!0), t.push({ type: "image", node: e }), (l = !0)) : n.push(e);
                            }),
                            s(!1),
                            t
                        );
                    })(t.content);
                return !0 !== a.changelogImagesDisabled && o.some((e) => "image" === e.type)
                    ? (0, l.jsx)(
                          s.Fragment,
                          {
                              children: o.map((e, t) =>
                                  "image" === e.type
                                      ? (0, l.jsx)(
                                            s.Fragment,
                                            { children: n([e.node], { ...a, changelogBlockImage: !0 }) },
                                            t,
                                        )
                                      : (0, l.jsx)("p", { className: u, children: n(e.nodes, a) }, t),
                              ),
                          },
                          a.key,
                      )
                    : (0, l.jsx)("p", { className: u, children: n(t.content, a) }, a.key);
            },
        }),
    };
