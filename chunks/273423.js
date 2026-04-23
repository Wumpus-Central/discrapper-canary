a.d(t, { A: () => b, I: () => f }), a(321073);
var n,
    l = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(311907),
    c = a(990078),
    d = a(319060),
    u = a(664121),
    h = a(834730),
    m = a(573435),
    p = a(773669),
    _ = a(486020),
    g = a(240248),
    x = a(985018),
    A = a(805936),
    f =
        (((n = {})[(n.SMALL = (0, g.xI)(d.A.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (n[(n.LARGE = (0, g.xI)(d.A.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        n);
let C = { [f.SMALL]: A.Ps, [f.LARGE]: A.XY },
    v = { [f.SMALL]: A.Bx, [f.LARGE]: A.J3 };
function b(e) {
    let {
            application: t,
            mutualGuilds: a,
            mutualGuildShownMax: n = 4,
            className: s,
            textVariant: d = "text-sm/normal",
            compact: g,
            guildIconSize: b = f.LARGE,
            guildsClassName: j,
            children: I,
        } = e,
        E = (0, o.bG)([p.default], () => p.default.locale),
        N = new Intl.ListFormat(E),
        S = t.directory_entry?.guild_count ?? 0,
        y = a?.length ?? 0,
        P = Math.max(0, S - y),
        { shownMutualGuilds: R, hiddenMutualGuilds: T } = i.useMemo(() => {
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
        L = T.length,
        D = (function (e, t, a, n, l) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === a) return x.intl.formatToPlainString(x.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? x.t.YR8PSL : x.t.GQjq6c,
                s = new Intl.NumberFormat(n, { notation: l ? "compact" : "standard", compactDisplay: "short" });
            return x.intl.formatToPlainString(i, {
                guildCount: s.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: s.format(a),
            });
        })(S, y, P, E, g);
    return 0 === R.length && null == D
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  I,
                  (0, l.jsxs)("div", {
                      className: r()(s, A.iE),
                      children: [
                          (0, l.jsx)("div", {
                              className: r()(A.Pt, j),
                              children:
                                  R.length > 0
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                R.map((e, t) => {
                                                    let a = t === R.length - 1 && 0 === L,
                                                        n = _.Ay.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: b,
                                                            canAnimate: !1,
                                                        }),
                                                        s = (0, l.jsx)(c.m, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, l.jsx)("img", {
                                                                className: r()(A.Kk, v[b]),
                                                                src: n,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return a
                                                        ? (0, l.jsx)(i.Fragment, { children: s }, e.id)
                                                        : (0, l.jsx)(
                                                              m.Ay,
                                                              {
                                                                  className: A.SA,
                                                                  height: b,
                                                                  width: b,
                                                                  mask: m.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: s,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                L > 0
                                                    ? (0, l.jsx)(c.m, {
                                                          text: x.intl.formatToPlainString(x.t.m6oRrA, {
                                                              appNames: N.format(T.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, l.jsxs)("div", {
                                                              className: r()(A.S_, C[b]),
                                                              children: ["+", L],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, l.jsx)(u.R, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: b,
                                            height: b,
                                            className: A.DE,
                                        }),
                          }),
                          null != D ? (0, l.jsx)(h.E, { variant: d, color: "text-default", children: D }) : null,
                      ],
                  }),
              ],
          });
}
