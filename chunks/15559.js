r.d(n, {
    Z: function () {
        return a;
    }
});
let i = 5;
function a(e, n, r) {
    let { onChange: a } = e,
        o = !1,
        s = !1;
    return (
        (e.onChange = () => {
            if (o) {
                s = !0;
                return;
            }
            o = !0;
            try {
                let e = 0;
                do {
                    if (((s = !1), e++ >= i)) break;
                    null == n || n();
                    try {
                        a();
                    } finally {
                        null == r || r();
                    }
                } while (s);
            } finally {
                o = !1;
            }
        }),
        e
    );
}
