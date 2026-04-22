"use strict";
var r = n(860511),
    i = n(65978),
    s = n(647055),
    a = function (e) {
        return i.slice(0, e.length) === e;
    };
e.exports = a("Bun/")
    ? "BUN"
    : a("Cloudflare-Workers")
      ? "CLOUDFLARE"
      : a("Deno/")
        ? "DENO"
        : a("Node.js/")
          ? "NODE"
          : r.Bun && "string" == typeof Bun.version
            ? "BUN"
            : r.Deno && "object" == typeof Deno.version
              ? "DENO"
              : "process" === s(r.process)
                ? "NODE"
                : r.window && r.document
                  ? "BROWSER"
                  : "REST";
