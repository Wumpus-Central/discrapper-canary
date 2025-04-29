n.d(t, { Z: () => i });
let r = 5;
function i(e, t, n) {
    let { onChange: i } = e,
        o = !1,
        a = !1;
    return (
        (e.onChange = () => {
            if (o) {
                a = !0;
                return;
            }
            o = !0;
            try {
                let e = 0;
                do {
                    if (((a = !1), e++ >= r)) break;
                    null == t || t();
                    try {
                        i();
                    } finally {
                        null == n || n();
                    }
                } while (a);
            } finally {
                o = !1;
            }
        }),
        e
    );
}
