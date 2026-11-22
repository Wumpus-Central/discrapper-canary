var i = n(582128);
let a = new Set(),
    l = null;
n.d(
    e,
    {},
    {
        N: function (t) {
            for (let e of ((l = t), [...a])) e(t);
            return l !== t;
        },
        z: function (t, e) {
            let n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => {
                    if (null == t) return;
                    function e() {
                        l === t && ((l = null), n.current());
                    }
                    e();
                    let i = (n) => {
                        n === t && e();
                    };
                    return (
                        a.add(i),
                        () => {
                            a.delete(i);
                        }
                    );
                }, [t]));
        },
    },
);
