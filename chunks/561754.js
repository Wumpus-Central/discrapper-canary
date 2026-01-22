n.d(t, {
    A: () => P,
}),
    n(114821),
    n(339614),
    n(896048),
    n(321073),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(59892),
    s = n(114088),
    o = n(743923),
    l = n(864642),
    c = n(274361),
    u = n(816694),
    d = n(418522),
    f = n(150239),
    p = n(464602),
    _ = n(623819),
    h = n(342470),
    m = n(554067),
    g = n(471767),
    E = n(989349),
    b = n.n(E),
    y = n(580424),
    O = n(379418),
    A = n(773669),
    v = n(634788),
    S = n(374803),
    I = n(985018);
let T = [
        "YYYYMMDD",
        "YYYY-MM-DD",
        "LL",
        "L",
        "MMMM Do YYYY",
        "MMMM Do YY",
        "MMMM Do, YYYY",
        "MMMM Do, YY",
        "MMMM D YYYY",
        "MMMM D YY",
        "MMMM D, YYYY",
        "MMMM D, YY",
        "MMMM Do YYYY",
        "MMMM Do YY",
        "MMMM Do, YYYY",
        "MMMM Do, YY",
        "MMM D YYYY",
        "MMM D YY",
        "MMM D, YYYY",
        "MMM D, YY",
        "MMM Do YYYY",
        "MMM Do YY",
        "MMM Do, YYYY",
        "MMM Do, YY",
        "MMMM D",
        "MMMM Do",
        "MMM D",
        "MMM Do",
        "D MMMM",
        "Do MMMM",
        "D MMM",
        "Do MMM",
        "dddd",
        "ddd",
    ],
    C = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    N = [b().ISO_8601, ...T.flatMap((e) => [...C.map((t) => "".concat(e, " ").concat(t)), ...C])];

function R() {
    let e = A.default.locale;
    if ("en-US" === e) return a;
    if ("en-GB" === e) return a.GB;
    if ("de" === e) return s;
    if ("fr" === e) return o;
    if ("ja" === e) return l;
    else if ("nl" === e) return c;
    else if ("ru" === e) return u;
    else if ("it" === e) return d;
    else if ("uk" === e) return f;
    else if ("zh-CN" === e) return p;
    else if ("zh-TW" === e) return _;
    else if (e.startsWith("sv-")) return h;
    else if (e.startsWith("pt-")) return m;
    else if (e.startsWith("es-")) return g;
    else return null;
}

function w(e, t, n) {
    let r, i, a;
    if (null == n) return {};
    let s = e.clone();
    s.subtract(1, n.periodType);
    let o = t.clone();
    return (
        o.add(1, n.periodType),
        t.isSame(e, n.periodType)
            ? ((a = I.intl.string(n.currentName)), t.isSameOrBefore(e) && (i = I.intl.string(n.nextName)))
            : t.isSame(s, n.periodType) && ((a = I.intl.string(n.previousName)), (i = I.intl.string(n.currentName))),
        null != i && (r = o.unix().toString()),
        {
            adjustedTimestamp: r,
            adjustedDescription: i,
            unadjustedDescription: a,
        }
    );
}
let P = {
    autocompleteInputElementType: "timestampMentionInput",
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n) {
        var r;
        let i = b()(),
            a = R(),
            [s] = null != (r = null == a ? void 0 : a.parse(n, i.toDate())) ? r : [void 0],
            o = (null == s ? void 0 : s.start) != null && (null == s ? void 0 : s.end) == null && s.text === n,
            l = o ? b()(s.start.date()) : b()(n, N, !0),
            c = [],
            { format: u } = l.creationData();
        if (
            ("string" != typeof u && (u = void 0),
            "" !== n || l.isValid() || ((l = i), (u = "YYYYMMDDHHmmss")),
            l.isValid() && (o || null != u))
        ) {
            let e;
            if (o && !s.start.isCertain("hour")) {
                let e = 9e5,
                    t = Math.round(l.valueOf() / e) * e;
                l = b()(t);
            }
            let t = o ? s.start.isCertain("weekday") : null == u ? void 0 : u.includes("d"),
                n = o
                    ? s.start.isCertain("day") || s.start.isCertain("month") || s.start.isCertain("year")
                    : null == u
                      ? void 0
                      : u.includes("D"),
                r = o ? s.start.isCertain("year") : null == u ? void 0 : u.includes("Y"),
                a = o ? s.start.isCertain("second") : null == u ? void 0 : u.includes("s"),
                d = l.unix().toString(),
                f = a ? "S" : "s";
            n || t
                ? t && !n
                    ? (e = {
                          periodType: "week",
                          previousName: I.t["4uTwgO"],
                          currentName: I.t["6YiNaP"],
                          nextName: I.t.HE4jqH,
                      })
                    : r ||
                      (e = {
                          periodType: "year",
                          previousName: I.t.R7VMEE,
                          currentName: I.t["U8lK/J"],
                          nextName: I.t.OppVVE,
                      })
                : (c.push({
                      mention: {
                          timestamp: d,
                          format: a ? "T" : "t",
                      },
                      description: I.intl.string(I.t.yHv4oJ),
                  }),
                  c.push({}),
                  (e = {
                      periodType: "day",
                      previousName: I.t.ZdDLO0,
                      currentName: I.t.mbs4NX,
                      nextName: I.t["EqnX/z"],
                  }));
            let { adjustedTimestamp: p, adjustedDescription: _, unadjustedDescription: h } = w(i, l, e);
            null != p &&
                (c.push({
                    mention: {
                        timestamp: p,
                        format: f,
                    },
                    description: _,
                }),
                c.push({
                    mention: {
                        timestamp: p,
                        format: "f",
                    },
                }),
                c.push({
                    mention: {
                        timestamp: p,
                        format: "F",
                    },
                }),
                c.push({
                    mention: {
                        timestamp: p,
                        format: "R",
                    },
                }),
                c.push({})),
                c.push({
                    mention: {
                        timestamp: d,
                        format: f,
                    },
                    description: h,
                }),
                c.push({
                    mention: {
                        timestamp: d,
                        format: "f",
                    },
                }),
                c.push({
                    mention: {
                        timestamp: d,
                        format: "F",
                    },
                }),
                c.push({
                    mention: {
                        timestamp: d,
                        format: "R",
                    },
                });
        }
        return {
            results: {
                mentions: c,
            },
        };
    },
    renderResults(e) {
        let {
                results: { mentions: t },
                selectedIndex: n,
                query: a,
                onHover: s,
                onClick: o,
            } = e,
            l = t.map((e, t) => {
                let { mention: i, description: a } = e;
                if (void 0 === i) return (0, r.jsx)(y.Ay.Divider, {}, "divider-".concat(t));
                let l = (0, O.WA)(i);
                return null == l
                    ? null
                    : (0, r.jsx)(
                          y.Ay.Timestamp,
                          {
                              onClick: o,
                              onHover: s,
                              selected: n === t,
                              index: t,
                              timestamp: l,
                              description: a,
                          },
                          "timestamp-".concat(t),
                      );
            }),
            c = I.t.I4nJDb,
            u = I.intl.string(I.t.pUP8UM);
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, v.wZ)({
                        titleWithQuery: c,
                        titleWithoutQuery: u,
                        query: a,
                        getQuery: (e) => "".concat(e),
                    }),
                    l,
                ],
            },
            "timestamp_formats",
        );
    },
    onSelect(e) {
        var t, n;
        let {
                results: { mentions: r },
                index: i,
                options: a,
            } = e,
            { mention: s } = null != (t = r[i]) ? t : {};
        if (null == s) return null;
        let o = (0, O.tf)(s.timestamp, s.format),
            l = null == (n = (0, O.WA)(s)) ? void 0 : n.formatted;
        return null == l
            ? null
            : (a.replaceInlineInput("timestampMentionInput", l, o),
              {
                  type: S.kc.TIMESTAMP,
              });
    },
};
