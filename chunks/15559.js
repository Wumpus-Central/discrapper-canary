n.d(t, { Z: () => i });
let r = 5;
function i(e, t, n) {
    let { onChange: i } = e,
        a = !1,
        o = !1;
    return (
        (e.onChange = () => {
            if (a) {
                o = !0;
                return;
            }
            a = !0;
            try {
                let e = 0;
                do {
                    if (((o = !1), e++ >= r)) break;
                    null == t || t();
                    try {
                        i();
                    } finally {
                        null == n || n();
                    }
                } while (o);
            } finally {
                a = !1;
            }
        }),
        e
    );
}
