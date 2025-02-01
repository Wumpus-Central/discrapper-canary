var t = 1073741823;
e.exports = function (e, n) {
    if ('number' != typeof e) throw TypeError('Iterations not a number');
    if (e < 0) throw TypeError('Bad iterations');
    if ('number' != typeof n) throw TypeError('Key length not a number');
    if (n < 0 || n > t || n != n) throw TypeError('Bad key length');
};
