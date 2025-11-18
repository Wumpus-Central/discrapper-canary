n.d(t, {
    Z: () => C,
    x: () => b,
}),
    n(539854);
var r,
    a = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    c = n(28664),
    d = n(477690),
    u = n(481060),
    p = n(686546),
    m = n(706454),
    h = n(768581),
    g = n(624138),
    _ = n(388032),
    f = n(390354),
    b =
        (((r = {})[(r.SMALL = (0, g.Mg)(d.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (r[(r.LARGE = (0, g.Mg)(d.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        r);
let x = {
        [b.SMALL]: f.moreGuildsSmall,
        [b.LARGE]: f.moreGuildsLarge,
    },
    v = {
        [b.SMALL]: f.iconSmall,
        [b.LARGE]: f.iconLarge,
    };
function C(e) {
    var t, n, r;
    let {
            application: l,
            mutualGuilds: d,
            mutualGuildShownMax: g = 4,
            className: C,
            textVariant: j = "text-sm/normal",
            compact: y,
            guildIconSize: I = b.LARGE,
            guildsClassName: S,
            children: P,
        } = e,
        O = (0, o.e7)([m.default], () => m.default.locale),
        E = new Intl.ListFormat(O),
        N = null != (n = null == (t = l.directory_entry) ? void 0 : t.guild_count) ? n : 0,
        T = null != (r = null == d ? void 0 : d.length) ? r : 0,
        A = Math.max(0, N - T),
        { shownMutualGuilds: L, hiddenMutualGuilds: R } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == d ||
                    d.forEach((n) => {
                        e.length < g && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === g && t.length > 0 && (t.push(e[g - 1]), (e = e.slice(0, g - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t,
                }
            );
        }, [d, g]),
        Z = R.length,
        w = (function (e, t, n, r, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return _.intl.formatToPlainString(_.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? _.t.YR8PSL : _.t.GQjq6c,
                l = new Intl.NumberFormat(r, {
                    notation: a ? "compact" : "standard",
                    compactDisplay: "short",
                });
            return _.intl.formatToPlainString(i, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n),
            });
        })(N, T, A, O, y);
    return 0 === L.length && null == w
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  P,
                  (0, a.jsxs)("div", {
                      className: s()(C, f.wrapper),
                      children: [
                          (0, a.jsx)("div", {
                              className: s()(f.icons, S),
                              children:
                                  L.length > 0
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                L.map((e, t) => {
                                                    let n = t === L.length - 1 && 0 === Z,
                                                        r = h.ZP.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: I,
                                                            canAnimate: !1,
                                                        }),
                                                        l = (0, a.jsx)(c.u, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, a.jsx)("img", {
                                                                className: s()(f.icon, v[I]),
                                                                src: r,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return n
                                                        ? (0, a.jsx)(i.Fragment, { children: l }, e.id)
                                                        : (0, a.jsx)(
                                                              p.ZP,
                                                              {
                                                                  className: f.iconMask,
                                                                  height: I,
                                                                  width: I,
                                                                  mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: l,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                Z > 0
                                                    ? (0, a.jsx)(c.u, {
                                                          text: _.intl.formatToPlainString(_.t.m6oRrA, {
                                                              appNames: E.format(R.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, a.jsxs)("div", {
                                                              className: s()(f.moreGuilds, x[I]),
                                                              children: ["+", Z],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, a.jsx)(u.QTo, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: I,
                                            height: I,
                                            className: f.defaultIcon,
                                        }),
                          }),
                          null != w
                              ? (0, a.jsx)(u.Text, {
                                    variant: j,
                                    color: "header-secondary",
                                    children: w,
                                })
                              : null,
                      ],
                  }),
              ],
          });
}
