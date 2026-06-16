"use strict";
var r = n(308227),
    a = n(13934),
    o = n(459547),
    i = function (e) {
        return a.slice(0, e.length) === e;
    };
e.exports = i("Bun/")
    ? "BUN"
    : i("Cloudflare-Workers")
      ? "CLOUDFLARE"
      : i("Deno/")
        ? "DENO"
        : i("Node.js/")
          ? "NODE"
          : r.Bun && "string" == typeof Bun.version
            ? "BUN"
            : r.Deno && "object" == typeof Deno.version
              ? "DENO"
              : "process" === o(r.process)
                ? "NODE"
                : r.window && r.document
                  ? "BROWSER"
                  : "REST";
