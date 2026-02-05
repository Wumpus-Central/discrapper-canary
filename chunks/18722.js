"use strict";
n.d(t, { A: () => i });
let r = 5;
function i(e, t, n) {
    let { onChange: i } = e,
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
                    if (((s = !1), e++ >= r)) break;
                    t?.();
                    try {
                        i();
                    } finally {
                        n?.();
                    }
                } while (s);
            } finally {
                a = !1;
            }
        }),
        e
    );
}
