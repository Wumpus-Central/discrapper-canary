n.d(t, {
    Z: () => j,
    x: () => x,
}),
    n(539854);
var a,
    r = n(54381),
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
    f = n(624138),
    b = n(388032),
    g = n(229059),
    x =
        (((a = {})[(a.SMALL = (0, f.Mg)(d.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (a[(a.LARGE = (0, f.Mg)(d.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        a);
let v = {
        [x.SMALL]: g.moreGuildsSmall,
        [x.LARGE]: g.moreGuildsLarge,
    },
    C = {
        [x.SMALL]: g.iconSmall,
        [x.LARGE]: g.iconLarge,
    };
function j(e) {
    var t, n, a;
    let {
            application: l,
            mutualGuilds: d,
            mutualGuildShownMax: f = 4,
            className: j,
            textVariant: _ = "text-sm/normal",
            compact: y,
            guildIconSize: I = x.LARGE,
            guildsClassName: S,
            children: P,
        } = e,
        O = (0, o.e7)([m.default], () => m.default.locale),
        E = new Intl.ListFormat(O),
        N = null != (n = null == (t = l.directory_entry) ? void 0 : t.guild_count) ? n : 0,
        T = null != (a = null == d ? void 0 : d.length) ? a : 0,
        A = Math.max(0, N - T),
        { shownMutualGuilds: L, hiddenMutualGuilds: R } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == d ||
                    d.forEach((n) => {
                        e.length < f && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === f && t.length > 0 && (t.push(e[f - 1]), (e = e.slice(0, f - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t,
                }
            );
        }, [d, f]),
        Z = R.length,
        w = (function (e, t, n, a, r) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return b.intl.formatToPlainString(b.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? b.t.YR8PSL : b.t.GQjq6c,
                l = new Intl.NumberFormat(a, {
                    notation: r ? "compact" : "standard",
                    compactDisplay: "short",
                });
            return b.intl.formatToPlainString(i, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n),
            });
        })(N, T, A, O, y);
    return 0 === L.length && null == w
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  P,
                  (0, r.jsxs)("div", {
                      className: s()(j, g.wrapper),
                      children: [
                          (0, r.jsx)("div", {
                              className: s()(g.icons, S),
                              children:
                                  L.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                L.map((e, t) => {
                                                    let n = t === L.length - 1 && 0 === Z,
                                                        a = h.ZP.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: I,
                                                            canAnimate: !1,
                                                        }),
                                                        l = (0, r.jsx)(c.u, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, r.jsx)("img", {
                                                                className: s()(g.icon, C[I]),
                                                                src: a,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return n
                                                        ? (0, r.jsx)(i.Fragment, { children: l }, e.id)
                                                        : (0, r.jsx)(
                                                              p.ZP,
                                                              {
                                                                  className: g.iconMask,
                                                                  height: I,
                                                                  width: I,
                                                                  mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: l,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                Z > 0
                                                    ? (0, r.jsx)(c.u, {
                                                          text: b.intl.formatToPlainString(b.t.m6oRrA, {
                                                              appNames: E.format(R.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, r.jsxs)("div", {
                                                              className: s()(g.moreGuilds, v[I]),
                                                              children: ["+", Z],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, r.jsx)(u.QTo, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: I,
                                            height: I,
                                            className: g.defaultIcon,
                                        }),
                          }),
                          null != w
                              ? (0, r.jsx)(u.Text, {
                                    variant: _,
                                    color: "text-default",
                                    children: w,
                                })
                              : null,
                      ],
                  }),
              ],
          });
}
