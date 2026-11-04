var l = n(582128);
let i = new Set(),
    a = null;
n.d(
    e,
    {},
    {
        N: function (t) {
            for (let e of ((a = t), [...i])) e(t);
            return a !== t;
        },
        z: function (t, e) {
            let n = l.useRef(e);
            (l.useLayoutEffect(() => {
                n.current = e;
            }),
                l.useEffect(() => {
                    if (null == t) return;
                    function e() {
                        a === t && ((a = null), n.current());
                    }
                    e();
                    let l = (n) => {
                        n === t && e();
                    };
                    return (
                        i.add(l),
                        () => {
                            i.delete(l);
                        }
                    );
                }, [t]));
        },
    },
);
