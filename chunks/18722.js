"use strict";
function i(e, t, n) {
    let { onChange: i } = e,
        l = !1,
        s = !1;
    return (
        (e.onChange = () => {
            if (l) {
                s = !0;
                return;
            }
            l = !0;
            try {
                let e = 0;
                do {
                    if (((s = !1), e++ >= 5)) break;
                    t?.();
                    try {
                        i();
                    } finally {
                        n?.();
                    }
                } while (s);
            } finally {
                l = !1;
            }
        }),
        e
    );
}
n.d(t, { A: () => i });
