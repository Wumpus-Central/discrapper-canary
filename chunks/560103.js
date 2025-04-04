var r = n(424353),
    o = n(673574),
    a = n(6837),
    i = function (e) {
        return o.slice(0, e.length) === e;
    };
e.exports = i('Bun/') ? 'BUN' : i('Cloudflare-Workers') ? 'CLOUDFLARE' : i('Deno/') ? 'DENO' : i('Node.js/') ? 'NODE' : r.Bun && 'string' == typeof Bun.version ? 'BUN' : r.Deno && 'object' == typeof Deno.version ? 'DENO' : 'process' === a(r.process) ? 'NODE' : r.window && r.document ? 'BROWSER' : 'REST';
