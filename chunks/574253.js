Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.findMostLikelyADYear = function (e) {
        return e < 100 && (e > 50 ? (e += 1900) : (e += 2e3)), e;
    }),
    (t.findYearClosestToRef = function (e, t, r) {
        let a = new Date(e);
        a.setMonth(r - 1), a.setDate(t);
        let i = (0, n.addDuration)(a, { year: 1 }),
            s = (0, n.addDuration)(a, { year: -1 });
        return (
            Math.abs(i.getTime() - e.getTime()) < Math.abs(a.getTime() - e.getTime())
                ? (a = i)
                : Math.abs(s.getTime() - e.getTime()) < Math.abs(a.getTime() - e.getTime()) && (a = s),
            a.getFullYear()
        );
    });
let n = r(628403);
