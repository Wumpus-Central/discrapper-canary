var i = n(384111);
t.certificate = n(201699);
var r = i.define('RSAPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('modulus').int(), this.key('publicExponent').int(), this.key('privateExponent').int(), this.key('prime1').int(), this.key('prime2').int(), this.key('exponent1').int(), this.key('exponent2').int(), this.key('coefficient').int());
});
t.RSAPrivateKey = r;
var a = i.define('RSAPublicKey', function () {
    this.seq().obj(this.key('modulus').int(), this.key('publicExponent').int());
});
t.RSAPublicKey = a;
var s = i.define('SubjectPublicKeyInfo', function () {
    this.seq().obj(this.key('algorithm').use(o), this.key('subjectPublicKey').bitstr());
});
t.PublicKey = s;
var o = i.define('AlgorithmIdentifier', function () {
        this.seq().obj(this.key('algorithm').objid(), this.key('none').null_().optional(), this.key('curve').objid().optional(), this.key('params').seq().obj(this.key('p').int(), this.key('q').int(), this.key('g').int()).optional());
    }),
    l = i.define('PrivateKeyInfo', function () {
        this.seq().obj(this.key('version').int(), this.key('algorithm').use(o), this.key('subjectPrivateKey').octstr());
    });
t.PrivateKey = l;
var u = i.define('EncryptedPrivateKeyInfo', function () {
    this.seq().obj(
        this.key('algorithm')
            .seq()
            .obj(
                this.key('id').objid(),
                this.key('decrypt')
                    .seq()
                    .obj(
                        this.key('kde')
                            .seq()
                            .obj(this.key('id').objid(), this.key('kdeparams').seq().obj(this.key('salt').octstr(), this.key('iters').int())),
                        this.key('cipher').seq().obj(this.key('algo').objid(), this.key('iv').octstr())
                    )
            ),
        this.key('subjectPrivateKey').octstr()
    );
});
t.EncryptedPrivateKey = u;
var c = i.define('DSAPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('p').int(), this.key('q').int(), this.key('g').int(), this.key('pub_key').int(), this.key('priv_key').int());
});
(t.DSAPrivateKey = c),
    (t.DSAparam = i.define('DSAparam', function () {
        this.int();
    }));
var d = i.define('ECPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('privateKey').octstr(), this.key('parameters').optional().explicit(0).use(f), this.key('publicKey').optional().explicit(1).bitstr());
});
t.ECPrivateKey = d;
var f = i.define('ECParameters', function () {
    this.choice({ namedCurve: this.objid() });
});
t.signature = i.define('signature', function () {
    this.seq().obj(this.key('r').int(), this.key('s').int());
});
