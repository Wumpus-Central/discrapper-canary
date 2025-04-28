var e = r(127849),
    o = r(476078),
    i = r(796138),
    u = function (t) {
        return o.slice(0, t.length) === t;
    };
t.exports = u('Bun/') ? 'BUN' : u('Cloudflare-Workers') ? 'CLOUDFLARE' : u('Deno/') ? 'DENO' : u('Node.js/') ? 'NODE' : e.Bun && 'string' == typeof Bun.version ? 'BUN' : e.Deno && 'object' == typeof Deno.version ? 'DENO' : 'process' === i(e.process) ? 'NODE' : e.window && e.document ? 'BROWSER' : 'REST';
