n.d(t, { J: () => l }), n(388685);
var r = n(473749),
    i = n(685816);
let l = (e, t, n) => {
        let [i, l] = (0, r.useState)(!1);
        return (
            (0, r.useEffect)(() => {
                let r = a(e);
                if (t || n || null == r) return void l(!1);
                let i = r - Date.now();
                if (i <= 0) return void l(!0);
                l(!1);
                let s = setTimeout(
                    () => {
                        l(!0);
                    },
                    Math.min(2147483647, i),
                );
                return () => clearTimeout(s);
            }, [t, n, e]),
            i
        );
    },
    a = (e) => {
        let t = null;
        return (
            e.forEach((e) => {
                let n = null;
                e.type === i.z.IMMERSIVE_BANNER
                    ? (n = null != e.endTime ? e.endTime.getTime() : null)
                    : e.type === i.z.COUNTDOWN_TIMER && (n = e.endTime.getTime()),
                    (null == t || (null != n && n < t)) && (t = n);
            }),
            t
        );
    };
