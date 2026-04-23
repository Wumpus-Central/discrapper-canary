l.d(t, { n: () => s });
var a = l(64700),
    r = l(651162),
    n = l(652215);
let s = (e, t, l) => {
        let [r, s] = (0, a.useState)(!1);
        return (
            (0, a.useEffect)(() => {
                let a = o(e);
                if (t || l || null == a) return void s(!1);
                let r = a - Date.now();
                if (r <= 0) return void s(!0);
                s(!1);
                let i = setTimeout(
                    () => {
                        s(!0);
                    },
                    Math.min(n.mnr, r),
                );
                return () => clearTimeout(i);
            }, [t, l, e]),
            r
        );
    },
    o = (e) => {
        let t = null;
        return (
            e.forEach((e) => {
                let l = null;
                e.type === r.g.IMMERSIVE_BANNER
                    ? (l = null != e.endTime ? e.endTime.getTime() : null)
                    : e.type === r.g.COUNTDOWN_TIMER && (l = e.endTime.getTime()),
                    (null == t || (null != l && l < t)) && (t = l);
            }),
            t
        );
    };
