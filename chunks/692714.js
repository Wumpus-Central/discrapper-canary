var r = n(72290);
e.exports =
    "object" == typeof r && r.env && r.env.NODE_DEBUG && /\bsemver\b/i.test(r.env.NODE_DEBUG)
        ? (...e) => console.error("SEMVER", ...e)
        : () => {};
