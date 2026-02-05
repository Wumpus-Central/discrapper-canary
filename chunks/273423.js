a.d(t, { A: () => v, I: () => A }), a(321073);
var n,
    i = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    o = a(311907),
    c = a(990078),
    d = a(319060),
    u = a(397927),
    h = a(573435),
    m = a(773669),
    p = a(486020),
    _ = a(240248),
    g = a(985018),
    x = a(420783),
    A =
        (((n = {})[(n.SMALL = (0, _.xI)(d.A.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (n[(n.LARGE = (0, _.xI)(d.A.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        n);
let C = { [A.SMALL]: x.Ps, [A.LARGE]: x.XY },
    b = { [A.SMALL]: x.Bx, [A.LARGE]: x.J3 };
function v(e) {
    let {
            application: t,
            mutualGuilds: a,
            mutualGuildShownMax: n = 4,
            className: l,
            textVariant: d = "text-sm/normal",
            compact: _,
            guildIconSize: v = A.LARGE,
            guildsClassName: f,
            children: j,
        } = e,
        I = (0, o.bG)([m.default], () => m.default.locale),
        E = new Intl.ListFormat(I),
        S = t.directory_entry?.guild_count ?? 0,
        N = a?.length ?? 0,
        y = Math.max(0, S - N),
        { shownMutualGuilds: T, hiddenMutualGuilds: R } = s.useMemo(() => {
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
        L = R.length,
        P = (function (e, t, a, n, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === a) return g.intl.formatToPlainString(g.t.pnzE1t, { mutualGuildCount: t });
            let s = t > 0 ? g.t.YR8PSL : g.t.GQjq6c,
                l = new Intl.NumberFormat(n, { notation: i ? "compact" : "standard", compactDisplay: "short" });
            return g.intl.formatToPlainString(s, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(a),
            });
        })(S, N, y, I, _);
    return 0 === T.length && null == P
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  j,
                  (0, i.jsxs)("div", {
                      className: r()(l, x.iE),
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(x.Pt, f),
                              children:
                                  T.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                T.map((e, t) => {
                                                    let a = t === T.length - 1 && 0 === L,
                                                        n = p.Ay.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: v,
                                                            canAnimate: !1,
                                                        }),
                                                        l = (0, i.jsx)(c.m, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, i.jsx)("img", {
                                                                className: r()(x.Kk, b[v]),
                                                                src: n,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return a
                                                        ? (0, i.jsx)(s.Fragment, { children: l }, e.id)
                                                        : (0, i.jsx)(
                                                              h.Ay,
                                                              {
                                                                  className: x.SA,
                                                                  height: v,
                                                                  width: v,
                                                                  mask: h.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: l,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                L > 0
                                                    ? (0, i.jsx)(c.m, {
                                                          text: g.intl.formatToPlainString(g.t.m6oRrA, {
                                                              appNames: E.format(R.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, i.jsxs)("div", {
                                                              className: r()(x.S_, C[v]),
                                                              children: ["+", L],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, i.jsx)(u.RR9, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: v,
                                            height: v,
                                            className: x.DE,
                                        }),
                          }),
                          null != P ? (0, i.jsx)(u.Text, { variant: d, color: "text-default", children: P }) : null,
                      ],
                  }),
              ],
          });
}
