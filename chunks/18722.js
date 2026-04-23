"use strict";
function r(e, t, n) {
    let { onChange: r } = e,
        i = !1,
        s = !1;
    return (
        (e.onChange = () => {
            if (i) {
                s = !0;
                return;
            }
            i = !0;
            try {
                let e = 0;
                do {
                    if (((s = !1), e++ >= 5)) break;
                    t?.();
                    try {
                        r();
                    } finally {
                        n?.();
                    }
                } while (s);
            } finally {
                i = !1;
            }
        }),
        e
    );
}
n.d(t, { A: () => r });
