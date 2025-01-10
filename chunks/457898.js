function n(e) {
    let n = ['string', 'char', 'byte', 'int', 'long', 'bool', 'decimal', 'single', 'double', 'DateTime', 'xml', 'array', 'hashtable', 'void'],
        r = 'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where',
        i = '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor',
        a = {
            $pattern: /-?[A-z\.\-]+\b/,
            keyword: 'if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter',
            built_in: 'ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write'
        },
        s = /\w[\w\d]*((-)[\w\d]+)*/,
        o = {
            begin: '`[\\s\\S]',
            relevance: 0
        },
        l = {
            className: 'variable',
            variants: [
                { begin: /\$\B/ },
                {
                    className: 'keyword',
                    begin: /\$this/
                },
                { begin: /\$[\w\d][\w\d_:]*/ }
            ]
        },
        u = {
            className: 'literal',
            begin: /\$(null|true|false)\b/
        },
        c = {
            className: 'string',
            variants: [
                {
                    begin: /"/,
                    end: /"/
                },
                {
                    begin: /@"/,
                    end: /^"@/
                }
            ],
            contains: [
                o,
                l,
                {
                    className: 'variable',
                    begin: /\$[A-z]/,
                    end: /[^A-z]/
                }
            ]
        },
        d = {
            className: 'string',
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /@'/,
                    end: /^'@/
                }
            ]
        },
        f = {
            className: 'doctag',
            variants: [{ begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/ }, { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }]
        },
        _ = e.inherit(e.COMMENT(null, null), {
            variants: [
                {
                    begin: /#/,
                    end: /$/
                },
                {
                    begin: /<#/,
                    end: /#>/
                }
            ],
            contains: [f]
        }),
        h = {
            className: 'built_in',
            variants: [{ begin: '('.concat(r, ')+(-)[\\w\\d]+') }]
        },
        p = {
            className: 'class',
            beginKeywords: 'class enum',
            end: /\s*[{]/,
            excludeEnd: !0,
            relevance: 0,
            contains: [e.TITLE_MODE]
        },
        m = {
            className: 'function',
            begin: /function\s+/,
            end: /\s*\{|$/,
            excludeEnd: !0,
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    begin: 'function',
                    relevance: 0,
                    className: 'keyword'
                },
                {
                    className: 'title',
                    begin: s,
                    relevance: 0
                },
                {
                    begin: /\(/,
                    end: /\)/,
                    className: 'params',
                    relevance: 0,
                    contains: [l]
                }
            ]
        },
        g = {
            begin: /using\s/,
            end: /$/,
            returnBegin: !0,
            contains: [
                c,
                d,
                {
                    className: 'keyword',
                    begin: /(using|assembly|command|module|namespace|type)/
                }
            ]
        },
        E = {
            variants: [
                {
                    className: 'operator',
                    begin: '('.concat(i, ')\\b')
                },
                {
                    className: 'literal',
                    begin: /(-){1,2}[\w\d-]+/,
                    relevance: 0
                }
            ]
        },
        v = {
            className: 'selector-tag',
            begin: /@\B/,
            relevance: 0
        },
        I = {
            className: 'function',
            begin: /\[.*\]\s*[\w]+[ ]??\(/,
            end: /$/,
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    className: 'keyword',
                    begin: '('.concat(a.keyword.toString().replace(/\s/g, '|'), ')\\b'),
                    endsParent: !0,
                    relevance: 0
                },
                e.inherit(e.TITLE_MODE, { endsParent: !0 })
            ]
        },
        T = [I, _, o, e.NUMBER_MODE, c, d, h, l, u, v],
        b = {
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0,
            contains: [].concat(
                'self',
                T,
                {
                    begin: '(' + n.join('|') + ')',
                    className: 'built_in',
                    relevance: 0
                },
                {
                    className: 'type',
                    begin: /[\.\w\d]+/,
                    relevance: 0
                }
            )
        };
    return (
        I.contains.unshift(b),
        {
            name: 'PowerShell',
            aliases: ['pwsh', 'ps', 'ps1'],
            case_insensitive: !0,
            keywords: a,
            contains: T.concat(p, m, g, E, b)
        }
    );
}
e.exports = n;
