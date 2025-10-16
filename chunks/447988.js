n.d(t, { J: () => o }), n(388685);
var r = n(647438),
    i = n(685816);
let a = 2147483647,
    o = (e, t, n) => {
        let [i, o] = (0, r.useState)(!1);
        return (
            (0, r.useEffect)(() => {
                let r = s(e);
                if (t || n || null == r) return void o(!1);
                let i = r - Date.now();
                if (i <= 0) return void o(!0);
                o(!1);
                let l = setTimeout(
                    () => {
                        o(!0);
                    },
                    Math.min(a, i),
                );
                return () => clearTimeout(l);
            }, [t, n, e]),
            i
        );
    },
    s = (e) => {
        let t = null;
        return (
            e.forEach((e) => {
                let n = null;
                if (e.type === i.z.IMMERSIVE_BANNER) {
                    let t = e;
                    n = null != t.endTime ? t.endTime.getTime() : null;
                } else e.type === i.z.COUNTDOWN_TIMER && (n = e.endTime.getTime());
                (null == t || (null != n && n < t)) && (t = n);
            }),
            t
        );
    };
