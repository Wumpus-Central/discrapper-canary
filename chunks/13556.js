var r = n(444675);
let i = 'object' == typeof r && r.env && r.env.NODE_DEBUG && /\bsemver\b/i.test(r.env.NODE_DEBUG) ? (...e) => console.error('SEMVER', ...e) : () => {};
e.exports = i;
