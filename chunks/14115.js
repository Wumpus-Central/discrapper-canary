"use strict";
n.d(t, { Y: () => i });
let r = { EARN: 0.25, SPEND: 0.3 },
    i = (e, t) => {
        let n = e > 0,
            i = t * r[n ? "EARN" : "SPEND"],
            a = n ? t - i : 0;
        return { duration: i, delay: a };
    };
