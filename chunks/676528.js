"use strict";
var r = n(860511),
    i = n(65978),
    a = n(647055),
    s = function (e) {
        return i.slice(0, e.length) === e;
    };
e.exports = (function () {
    return s("Bun/")
        ? "BUN"
        : s("Cloudflare-Workers")
          ? "CLOUDFLARE"
          : s("Deno/")
            ? "DENO"
            : s("Node.js/")
              ? "NODE"
              : r.Bun && "string" == typeof Bun.version
                ? "BUN"
                : r.Deno && "object" == typeof Deno.version
                  ? "DENO"
                  : "process" === a(r.process)
                    ? "NODE"
                    : r.window && r.document
                      ? "BROWSER"
                      : "REST";
})();
