a.d(t, { A: () => C, I: () => A }), a(321073);
var n,
    i = a(627968),
    l = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(311907),
    c = a(990078),
    d = a(319060),
    u = a(397927),
    m = a(573435),
    h = a(773669),
    p = a(486020),
    _ = a(240248),
    g = a(985018),
    x = a(15584),
    A =
        (((n = {})[(n.SMALL = (0, _.xI)(d.A.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (n[(n.LARGE = (0, _.xI)(d.A.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        n);
let f = { [A.SMALL]: x.Ps, [A.LARGE]: x.XY },
    b = { [A.SMALL]: x.Bx, [A.LARGE]: x.J3 };
function C(e) {
    let {
            application: t,
            mutualGuilds: a,
            mutualGuildShownMax: n = 4,
            className: s,
            textVariant: d = "text-sm/normal",
            compact: _,
            guildIconSize: C = A.LARGE,
            guildsClassName: v,
            children: j,
        } = e,
        I = (0, o.bG)([h.default], () => h.default.locale),
        S = new Intl.ListFormat(I),
        E = t.directory_entry?.guild_count ?? 0,
        N = a?.length ?? 0,
        y = Math.max(0, E - N),
        { shownMutualGuilds: T, hiddenMutualGuilds: R } = l.useMemo(() => {
            let e = [],
                t = [];
            return (
                a?.forEach((a) => {
                    e.length < n && null != a.icon ? e.push(a) : t.push(a);
                }),
                e.length === n && t.length > 0 && (t.push(e[n - 1]), (e = e.slice(0, n - 1))),
                { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
        }, [a, n]),
        P = R.length,
        L = (function (e, t, a, n, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === a) return g.intl.formatToPlainString(g.t.pnzE1t, { mutualGuildCount: t });
            let l = t > 0 ? g.t.YR8PSL : g.t.GQjq6c,
                s = new Intl.NumberFormat(n, { notation: i ? "compact" : "standard", compactDisplay: "short" });
            return g.intl.formatToPlainString(l, {
                guildCount: s.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: s.format(a),
            });
        })(E, N, y, I, _);
    return 0 === T.length && null == L
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  j,
                  (0, i.jsxs)("div", {
                      className: r()(s, x.iE),
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(x.Pt, v),
                              children:
                                  T.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                T.map((e, t) => {
                                                    let a = t === T.length - 1 && 0 === P,
                                                        n = p.Ay.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: C,
                                                            canAnimate: !1,
                                                        }),
                                                        s = (0, i.jsx)(c.m, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, i.jsx)("img", {
                                                                className: r()(x.Kk, b[C]),
                                                                src: n,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return a
                                                        ? (0, i.jsx)(l.Fragment, { children: s }, e.id)
                                                        : (0, i.jsx)(
                                                              m.Ay,
                                                              {
                                                                  className: x.SA,
                                                                  height: C,
                                                                  width: C,
                                                                  mask: m.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: s,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                P > 0
                                                    ? (0, i.jsx)(c.m, {
                                                          text: g.intl.formatToPlainString(g.t.m6oRrA, {
                                                              appNames: S.format(R.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, i.jsxs)("div", {
                                                              className: r()(x.S_, f[C]),
                                                              children: ["+", P],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, i.jsx)(u.RR9, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: C,
                                            height: C,
                                            className: x.DE,
                                        }),
                          }),
                          null != L ? (0, i.jsx)(u.Text, { variant: d, color: "text-default", children: L }) : null,
                      ],
                  }),
              ],
          });
}
