n.d(t, { Z: () => r });
let i = 5;
function r(e, t, n) {
    let { onChange: r } = e,
        a = !1,
        s = !1;
    return (
        (e.onChange = () => {
            if (a) {
                s = !0;
                return;
            }
            a = !0;
            try {
                let e = 0;
                do {
                    if (((s = !1), e++ >= i)) break;
                    null == t || t();
                    try {
                        r();
                    } finally {
                        null == n || n();
                    }
                } while (s);
            } finally {
                a = !1;
            }
        }),
        e
    );
}
