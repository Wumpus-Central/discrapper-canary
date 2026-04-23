a.d(n, { X: () => l, x: () => i });
var e = a(652215);
function i(t, n) {
    return (
        n === e.fg2.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(t), /^.+\.[^.@]{2,}$/.test(t)
    );
}
function l(t) {
    return t === e.fg2.MASTODON
        ? "@example@mastodon.social"
        : t === e.fg2.BLUESKY
          ? "example.bsky.social"
          : "clyde@example.com";
}
