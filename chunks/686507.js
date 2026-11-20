var i = n(582128);
let l = new Set(),
    a = null;
n.d(
    e,
    {},
    {
        N: function (t) {
            for (let e of ((a = t), [...l])) e(t);
            return a !== t;
        },
        z: function (t, e) {
            let n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => {
                    if (null == t) return;
                    function e() {
                        a === t && ((a = null), n.current());
                    }
                    e();
                    let i = (n) => {
                        n === t && e();
                    };
                    return (
                        l.add(i),
                        () => {
                            l.delete(i);
                        }
                    );
                }, [t]));
        },
    },
);
