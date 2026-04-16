"use strict";
n.d(t, { y: () => s });
let i = /\.$/,
    s = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(i, ""))
                  .join(". ")
                  .trim()
            : e;
